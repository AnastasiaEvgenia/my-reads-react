import { useContext, useState } from "react";
import {
	Box,
	Card,
	CardContent,
	Chip,
	IconButton,
	Typography,
} from "@mui/material";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import * as React from "react";
import { useDraggable } from "@dnd-kit/react";
import type { Book } from "@/api/booksApi.ts";
import BookImageDisplay from "@/components/BookImageDisplay.tsx";
import { BookMenu } from "@/components/BookMenu.tsx";
import { DrawerContext } from "@/components/AppLayout.tsx";

export default function BookCardDisplay({ book }: { book: Book }) {
	const { handleCardClick } = useContext(DrawerContext);
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	const { ref } = useDraggable({
		id: book.id,
	});

	const menuOpen = Boolean(anchorEl);

	const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
		event.stopPropagation();
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	const imageUrl =
		book.imageLinks?.thumbnail || book.imageLinks?.smallThumbnail || null;

	return (
		<Box ref={ref}>
			<Card
				sx={{
					height: "100%",
					display: "flex",
					flexDirection: "column",
					cursor: "pointer",
					background: "rgba(255, 255, 255, 0.05)",
					backdropFilter: "blur(10px)",
					border: "1px solid rgba(255, 255, 255, 0.1)",
					borderRadius: 2,
					transition: "all 0.3s ease",
					"&:hover": {
						transform: "translateY(-4px)",
						background: "rgba(255, 255, 255, 0.08)",
						border: "1px solid rgba(255, 255, 255, 0.2)",
						boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
					},
				}}
				onClick={(_) => handleCardClick(book)}
			>
				<BookImageDisplay imageUrl={imageUrl} title={book.title} />

				<CardContent
					sx={{
						flexGrow: 1,
						position: "relative",
						p: 1.5,
						"&:last-child": { pb: 1.5 },
					}}
				>
					<IconButton
						aria-label="more options"
						onClick={handleMenuClick}
						size="small"
						sx={{
							position: "absolute",
							top: 4,
							right: 4,
							background: "rgba(0, 0, 0, 0.3)",
							backdropFilter: "blur(5px)",
							"&:hover": {
								background: "rgba(0, 0, 0, 0.5)",
							},
						}}
					>
						<MoreVertIcon fontSize="small" />
					</IconButton>

					<Typography
						variant="body2"
						component="div"
						fontWeight={600}
						sx={{
							overflow: "hidden",
							textOverflow: "ellipsis",
							display: "-webkit-box",
							WebkitLineClamp: 2,
							WebkitBoxOrient: "vertical",
							pr: 4,
							mb: 0.5,
							lineHeight: 1.3,
						}}
					>
						{book.title}
					</Typography>

					{book.authors && book.authors.length > 0 && (
						<Typography
							variant="caption"
							color="text.secondary"
							sx={{
								display: "block",
								overflow: "hidden",
								textOverflow: "ellipsis",
								whiteSpace: "nowrap",
								mb: 0.5,
							}}
						>
							{book.authors.join(", ")}
						</Typography>
					)}

					{book.publisher && (
						<Typography
							variant="caption"
							color="text.secondary"
							sx={{
								display: "block",
								overflow: "hidden",
								textOverflow: "ellipsis",
								whiteSpace: "nowrap",
								mb: 0.5,
								opacity: 0.8,
							}}
						>
							{book.publisher}
						</Typography>
					)}

					<Box
						sx={{
							display: "flex",
							gap: 0.5,
							flexWrap: "wrap",
							mt: 1,
						}}
					>
						{book.pageCount && (
							<Chip
								label={`${book.pageCount}p`}
								size="small"
								sx={{
									height: 20,
									fontSize: "0.7rem",
									background: "rgba(255, 255, 255, 0.1)",
									border: "1px solid rgba(255, 255, 255, 0.2)",
								}}
							/>
						)}
						{book.language && (
							<Chip
								label={book.language.toUpperCase()}
								size="small"
								sx={{
									height: 20,
									fontSize: "0.7rem",
									background: "rgba(255, 255, 255, 0.1)",
									border: "1px solid rgba(255, 255, 255, 0.2)",
								}}
							/>
						)}
						{book.maturityRating && (
							<Chip
								label={
									book.maturityRating === "NOT_MATURE"
										? "ALL AGES"
										: book.maturityRating.replace("_", " ")
								}
								size="small"
								sx={{
									height: 20,
									fontSize: "0.7rem",
									background:
										book.maturityRating === "NOT_MATURE"
											? "rgba(76, 175, 80, 0.2)"
											: "rgba(255, 165, 0, 0.2)",
									border:
										book.maturityRating === "NOT_MATURE"
											? "1px solid rgba(76, 175, 80, 0.4)"
											: "1px solid rgba(255, 165, 0, 0.4)",
									color:
										book.maturityRating === "NOT_MATURE"
											? "#81c784"
											: "orange",
								}}
							/>
						)}
					</Box>
				</CardContent>
			</Card>

			{/* Menu */}
			<BookMenu
				menuOpen={menuOpen}
				book={book}
				anchorEl={anchorEl}
				handleMenuClose={handleMenuClose}
			/>
		</Box>
	);
}
