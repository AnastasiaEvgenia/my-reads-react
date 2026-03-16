import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { enqueueSnackbar } from "notistack";
import type { Book, Shelf } from "@/api/booksApi.ts";
import { useUpdateBookMutation } from "@/api/mutations.ts";

interface BookMenuProps {
	book: Book;
	anchorEl: HTMLElement | null;
	menuOpen: boolean;
	handleMenuClose: () => void;
}

export function BookMenu(props: BookMenuProps) {
	const { book, anchorEl, menuOpen, handleMenuClose } = props;
	const updateBookMutation = useUpdateBookMutation();
	const moveTo = async (shelf: Shelf) => {
		try {
			await updateBookMutation.mutateAsync({
				bookId: book.id,
				shelf: shelf,
			});
			enqueueSnackbar("Book moved successfully!", { variant: "success" });
		} catch (error: any) {
			enqueueSnackbar(`Failed to move book! Error "${error?.message}"`, {
				variant: "error",
			});
		}
	};
	return (
		<Menu
			anchorEl={anchorEl}
			open={menuOpen}
			onClose={handleMenuClose}
			onClick={(e) => e.stopPropagation()}
		>
			<MenuItem onClick={(_) => moveTo("currentlyReading")}>
				Currently Reading
			</MenuItem>
			<MenuItem onClick={(_) => moveTo("wantToRead")}>
				Add to wishlist
			</MenuItem>
			<MenuItem onClick={(_) => moveTo("read")}>Mark as read</MenuItem>
		</Menu>
	);
}
