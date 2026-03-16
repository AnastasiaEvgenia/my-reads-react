import { useMemo } from "react";
import { useBooksQuery } from "@/api/queries.ts";

export const useBooks = () => {
	const { data: booksData } = useBooksQuery();

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
