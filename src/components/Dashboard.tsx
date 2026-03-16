import Grid from "@mui/material/Grid";
import { Box, Drawer } from "@mui/material";
import { useState } from "react";
import type { Book } from "@/api/booksApi.ts";
import { useBooks } from "@/hooks/useBooks.ts";
import Shelf from "@/components/Shelf.tsx";
import { BookDetails } from "@/components/BookDetails.tsx";

export default function Dashboard() {
	const { wantToReadBooks, currentlyReadingBooks, readBooks } = useBooks();
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

	return (
		<Box>
			<Grid container spacing={2}>
				<Grid size={12}>
					<Shelf
						title={"Currently Reading"}
						books={currentlyReadingBooks}
						handleCardClick={handleCardClick}
					/>
				</Grid>
				<Grid size={12}>
					<Shelf
						title={"Want To Read"}
						books={wantToReadBooks}
						handleCardClick={handleCardClick}
					/>
				</Grid>
				<Grid size={12}>
					<Shelf
						title={"Read"}
						books={readBooks}
						handleCardClick={handleCardClick}
					/>
				</Grid>
			</Grid>
			{/* Side Drawer with Full Book Info */}
			<Drawer
				anchor="right"
				open={drawer.open}
				onClose={handleDrawerClose}
				onClick={(e) => e.stopPropagation()}
			>
				<BookDetails
					handleDrawerClose={handleDrawerClose}
					book={drawer.book}
				/>
			</Drawer>
		</Box>
	);
}
