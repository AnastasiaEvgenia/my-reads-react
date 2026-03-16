import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { enqueueSnackbar } from "notistack";
import {
	CheckBoxOutlineBlankOutlined,
	CheckBoxOutlined,
} from "@mui/icons-material";
import { Backdrop, CircularProgress } from "@mui/material";
import type { Book, Shelf } from "@/api/booksApi.ts";
import { useUpdateBookMutation } from "@/api/mutations.ts";

interface BookMenuProps {
	book: Book;
	anchorEl: HTMLElement | null;
	menuOpen: boolean;
	handleMenuClose: () => void;
	displayNoneOption: boolean;
}

const ShelfSelectedIcon = () => (
	<CheckBoxOutlined fontSize={"small"} color={"success"} />
);

const ShelfNotSelectedIcon = () => (
	<CheckBoxOutlineBlankOutlined fontSize={"small"} color={"success"} />
);

export function BookMenu(props: BookMenuProps) {
	const { book, anchorEl, menuOpen, handleMenuClose, displayNoneOption } =
		props;
	const updateBookMutation = useUpdateBookMutation();
	const moveTo = async (shelf: Shelf) => {
		try {
			await updateBookMutation.mutateAsync({
				bookId: book.id,
				shelf: shelf,
			});
			handleMenuClose();
			enqueueSnackbar("Book moved successfully!", { variant: "success" });
		} catch (error: any) {
			enqueueSnackbar(`Failed to move book! Error "${error?.message}"`, {
				variant: "error",
			});
		}
	};
	return (
		<>
			<Menu
				anchorEl={anchorEl}
				open={menuOpen}
				onClose={handleMenuClose}
				onClick={(e) => e.stopPropagation()}
			>
				<MenuItem
					onClick={(_) => moveTo("currentlyReading")}
					disabled={
						updateBookMutation.isPending ||
						book.shelf === "currentlyReading"
					}
				>
					{book.shelf === "currentlyReading" ? (
						<ShelfSelectedIcon />
					) : (
						<ShelfNotSelectedIcon />
					)}
					Currently Reading
				</MenuItem>
				<MenuItem
					onClick={(_) => moveTo("wantToRead")}
					disabled={
						updateBookMutation.isPending ||
						book.shelf === "wantToRead"
					}
				>
					{book.shelf === "wantToRead" ? (
						<ShelfSelectedIcon />
					) : (
						<ShelfNotSelectedIcon />
					)}
					Add to wishlist
				</MenuItem>
				<MenuItem
					onClick={(_) => moveTo("read")}
					disabled={
						updateBookMutation.isPending || book.shelf === "read"
					}
				>
					{book.shelf === "read" ? (
						<ShelfSelectedIcon />
					) : (
						<ShelfNotSelectedIcon />
					)}
					Mark as read
				</MenuItem>
				{displayNoneOption && (
					<MenuItem disabled={true}>
						{!book.shelf || book.shelf === "none" ? (
							<ShelfSelectedIcon />
						) : (
							<ShelfNotSelectedIcon />
						)}
						None
					</MenuItem>
				)}
			</Menu>
			<Backdrop open={updateBookMutation.isPending}>
				<CircularProgress color="inherit" />
			</Backdrop>
		</>
	);
}
