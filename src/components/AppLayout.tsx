import Container from "@mui/material/Container";
import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Header from "@/components/Header.tsx";

export default function AppLayout({ children }: { children: React.ReactNode }) {
	return (
		<Container
			maxWidth={false}
			sx={{
				display: "flex",
				flexDirection: "column",
				height: "100vh",
				background: "linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 100%)",
			}}
		>
			<Header />
			<Toolbar />
			{children}
		</Container>
	);
}
