import { useMemo } from "react";
import { useBooksQuery } from "@/api/queries.ts";

export const useBooks = () => {
	const {
		data: allBooks = [],
		isLoading,
		isError,
		error,
		refetch,
	} = useBooksQuery();

	const currentlyReadingBooks = useMemo(
		() => allBooks.filter((f) => f.shelf === "currentlyReading"),
		[allBooks],
	);

	const wantToReadBooks = useMemo(
		() => allBooks.filter((f) => f.shelf === "wantToRead"),
		[allBooks],
	);

	const readBooks = useMemo(
		() => allBooks.filter((f) => f.shelf === "read"),
		[allBooks],
	);

	return {
		currentlyReadingBooks,
		wantToReadBooks,
		readBooks,
		isLoading,
		isError,
		error,
		refetch,
	};
};
