import Container from "@mui/material/Container";
import * as React from "react";
import { createContext } from "react";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import { Drawer } from "@mui/material";
import type { Book } from "@/api/booksApi.ts";
import Header from "@/components/Header.tsx";
import { BookDetails } from "@/components/BookDetails.tsx";
import { useBookDrawer } from "@/hooks/useBookDrawer.ts";

export const DrawerContext = createContext<{ handleCardClick: (book: Book | null) => void }>({
	handleCardClick: () => {},
});
export default function AppLayout({ children }: { children: React.ReactNode }) {
	const { drawer, handleCardClick, handleDrawerClose } = useBookDrawer();
	return (
		<DrawerContext value={{ handleCardClick }}>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					minHeight: "100%",
					flex: 1,
				}}
			>
				<Header />
				<Toolbar />

				<Container
					maxWidth={false}
					sx={{
						display: "flex",
						flexDirection: "column",
						flex: 1,
						background:
							"linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 100%)",
						p: 2,
					}}
				>
					{children}
				</Container>
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
		</DrawerContext>
	);
}
