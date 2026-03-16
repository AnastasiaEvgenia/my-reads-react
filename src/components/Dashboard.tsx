import Grid from "@mui/material/Grid";
import { Backdrop, Box, CircularProgress, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "@tanstack/react-router";
import { DragDropProvider } from "@dnd-kit/react";
import { useBooks } from "@/hooks/useBooks.ts";
import Shelf from "@/components/Shelf.tsx";
import { useUpdateBookMutation } from "@/api/mutations.ts";

export default function Dashboard() {
	const { wantToReadBooks, currentlyReadingBooks, readBooks } = useBooks();
	const updateBookMutation = useUpdateBookMutation();
	return (
		<Box>
			<DragDropProvider
				onDragEnd={(event) => {
					if (event.canceled) return;

					const { source, target } = event.operation;
					if (!source || !target) return;

					const bookId = source.id as string;
					const shelf = target.id as string;
					updateBookMutation.mutate({ bookId, shelf });
				}}
			>
				<Grid container spacing={2}>
					<Grid size={12}>
						<Shelf
							id={"currentlyReading"}
							title={"Currently Reading"}
							books={currentlyReadingBooks}
						/>
					</Grid>
					<Grid size={12}>
						<Shelf
							id={"wantToRead"}
							title={"Want To Read"}
							books={wantToReadBooks}
						/>
					</Grid>
					<Grid size={12}>
						<Shelf id={"read"} title={"Read"} books={readBooks} />
					</Grid>
				</Grid>
			</DragDropProvider>
			<Fab
				color="primary"
				aria-label="add"
				sx={{ position: "fixed", bottom: 16, right: 16 }}
				component={Link}
				to={"/search"}
			>
				<AddIcon />
			</Fab>
			<Backdrop open={updateBookMutation.isPending}>
				<CircularProgress color="inherit" />
			</Backdrop>
		</Box>
	);
}
