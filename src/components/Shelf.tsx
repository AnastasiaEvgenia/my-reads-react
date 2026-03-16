import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import type { Book } from "@/api/booksApi.ts";
import ShelfTitle from "@/components/ShelfTitle.tsx";
import BookCardDisplay from "@/components/BookCardDisplay.tsx";

export default function Shelf({
	title,
	books = [],
	handleCardClick,
}: {
	title: string;
	books: Array<Book>;
	handleCardClick: (book: Book) => void;
}) {
	return (
		<Accordion defaultExpanded>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls={title}
				id="panel1-header"
			>
				<ShelfTitle title={title} />
			</AccordionSummary>
			<AccordionDetails>
				{books.length > 0 ? (
					<Grid container spacing={2}>
						{books.map((book) => (
							<Grid
								size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
								key={book.id}
							>
								<BookCardDisplay
									book={book}
									handleCardClick={handleCardClick}
								/>
							</Grid>
						))}
					</Grid>
				) : (
					<Typography variant="body2" color="textSecondary">
						No books available in your shelf.
					</Typography>
				)}
			</AccordionDetails>
		</Accordion>
	);
}
