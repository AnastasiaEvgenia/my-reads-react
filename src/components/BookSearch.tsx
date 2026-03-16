import { useMemo, useState } from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useBooksQuery, useBooksSearchQuery } from "@/api/queries.ts";
import BookCardDisplay from "@/components/BookCardDisplay.tsx";
import { SkeletonLoader } from "@/components/SkeletonLoader.tsx";
import { SearchInput } from "@/components/SearchInput.tsx";

export function BookSearch() {
	const [searchQuery, setSearchQuery] = useState("");
	const { data: allBooks = [], isLoading } = useBooksSearchQuery(searchQuery);
	const { data: libraryBooks } = useBooksQuery();

	const booksList = useMemo(() => {
		const booksInLibrary = libraryBooks.map((book) => book.id);
		return allBooks.map((book) => ({
			...book,
			shelf: booksInLibrary.includes(book.id)
				? libraryBooks.find((b) => b.id === book.id)?.shelf
				: "none",
		}));
	}, [libraryBooks, allBooks]);

	return (
		<Box>
			<SearchInput setSearchQuery={setSearchQuery} />
			<Box sx={{ mt: 2 }}>
				{isLoading ? (
					<SkeletonLoader />
				) : (
					<Grid container spacing={2}>
						{booksList.map((book) => (
							<Grid
								size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
								key={book.id}
							>
								<BookCardDisplay
									book={book}
									displayNoneOption={true}
								/>
							</Grid>
						))}
						{booksList.length === 0 && (
							<Grid size={12} sx={{ textAlign: "center", mt: 4 }}>
								<Typography>No books found.</Typography>
							</Grid>
						)}
					</Grid>
				)}
			</Box>
		</Box>
	);
}
