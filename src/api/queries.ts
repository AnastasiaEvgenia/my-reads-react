import { useQuery } from "@tanstack/react-query";
import { getAll } from "@/api/booksApi.ts";
import { booksKeys } from "@/api/keys.ts";

export function booksQueryOptions() {
	return {
		queryKey: booksKeys.booksList(),
		queryFn: () => getAll(),
	};
}

export function useBooksQuery() {
	return useQuery(booksQueryOptions());
}
