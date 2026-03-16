import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { getAll, search } from "@/api/booksApi.ts";
import { booksKeys } from "@/api/keys.ts";

export function booksQueryOptions() {
	return {
		queryKey: booksKeys.booksList(),
		queryFn: () => getAll(),
	};
}
export function searchQueryOptions(query: string) {
	return {
		queryKey: booksKeys.search(query),
		queryFn: () => search(query),
		enabled: !!query, // Only run if query is not empty
	};
}

export function useBooksQuery() {
	return useSuspenseQuery(booksQueryOptions());
}
export function useBooksSearchQuery(query: string) {
	return useQuery(searchQueryOptions(query));
}
