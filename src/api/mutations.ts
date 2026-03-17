import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Book, ShelfMap } from "@/api/booksApi.ts";
import { update } from "@/api/booksApi.ts";
import { booksKeys } from "@/api/keys.ts";

export function useUpdateBookMutation() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: ({ bookId, shelf }: { bookId: string; shelf: string }) =>
			update(bookId, shelf),
		onSuccess: (shelfMap: ShelfMap) => {
			const updatedBooks: Array<{ id: string; shelf: string }> = [];
			for (const [shelf, books] of Object.entries(shelfMap)) {
				books.forEach((bookId) => {
					updatedBooks.push({
						id: bookId,
						shelf: shelf,
					});
				});
			}
			queryClient.setQueryData(
				booksKeys.booksList(),
				(oldBooks: Array<Book>) =>
					oldBooks.map((book) => ({
						...book,
						shelf:
							updatedBooks.find((b) => b.id === book.id)?.shelf ||
							"none",
					})),
			);
		},
	});
}
