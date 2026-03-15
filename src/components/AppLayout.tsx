import Container from "@mui/material/Container";
import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Header from "@/components/Header.tsx";

export default function AppLayout({ children }: { children: React.ReactNode }) {
	return (
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
		</Box>
	);
}
