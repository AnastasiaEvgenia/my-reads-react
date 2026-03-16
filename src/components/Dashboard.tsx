import Grid from "@mui/material/Grid";
import { useBooks } from "@/hooks/useBooks.ts";
import Shelf from "@/components/Shelf.tsx";

export default function Dashboard() {
	const { wantToReadBooks, currentlyReadingBooks, readBooks } = useBooks();

	return (
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
	);
}
