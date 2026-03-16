import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { getAll } from "@/api/booksApi.ts";

export const useBooks = () => {
	const postsQueryOptions = queryOptions({
		queryKey: ["books"],
		queryFn: () => getAll(),
	});
	const allBooks = useSuspenseQuery(postsQueryOptions);
	const booksData = allBooks.data;

	const currentlyReadingBooks = useMemo(
		() => booksData.filter((f) => f.shelf === "currentlyReading"),
		[booksData],
	);

	const wantToReadBooks = useMemo(
		() => booksData.filter((f) => f.shelf === "wantToRead"),
		[booksData],
	);

	const readBooks = useMemo(
		() => booksData.filter((f) => f.shelf === "read"),
		[booksData],
	);

	return {
		currentlyReadingBooks,
		wantToReadBooks,
		readBooks,
	};
};
