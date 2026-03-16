import Grid from "@mui/material/Grid";
import { Box, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "@tanstack/react-router";
import { useBooks } from "@/hooks/useBooks.ts";
import Shelf from "@/components/Shelf.tsx";

export default function Dashboard() {
	const { wantToReadBooks, currentlyReadingBooks, readBooks } = useBooks();
	return (
		<Box>
			<Grid container spacing={2}>
				<Grid size={12}>
					<Shelf
						title={"Currently Reading"}
						books={currentlyReadingBooks}
					/>
				</Grid>
				<Grid size={12}>
					<Shelf title={"Want To Read"} books={wantToReadBooks} />
				</Grid>
				<Grid size={12}>
					<Shelf title={"Read"} books={readBooks} />
				</Grid>
			</Grid>
			<Fab
				color="primary"
				aria-label="add"
				sx={{ position: "fixed", bottom: 16, right: 16 }}
				component={Link}
				to={"/search"}
			>
				<AddIcon />
			</Fab>
		</Box>
	);
}
