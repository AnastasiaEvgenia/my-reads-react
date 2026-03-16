import { useState } from "react";
import type { Book } from "@/api/booksApi.ts";

export function useBookDrawer() {
	const [drawer, setDrawer] = useState<{ open: boolean; book: Book | null }>({
		open: false,
		book: null,
	});

	const handleCardClick = (book: Book | null) => {
		setDrawer({
			open: true,
			book: book,
		});
	};

	const handleDrawerClose = () => {
		setDrawer({
			open: false,
			book: null,
		});
	};

	return { drawer, handleCardClick, handleDrawerClose };
}
