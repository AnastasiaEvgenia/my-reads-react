import { useMutation, useQueryClient } from "@tanstack/react-query";
import { update } from "@/api/booksApi.ts";
import { booksKeys } from "@/api/keys.ts";

export function useUpdateBookMutation() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: ({ bookId, shelf }: { bookId: string; shelf: string }) =>
			update(bookId, shelf),
		onSuccess: async () => {
			await queryClient.invalidateQueries({
				queryKey: booksKeys.booksList(),
			});
		},
	});
}
