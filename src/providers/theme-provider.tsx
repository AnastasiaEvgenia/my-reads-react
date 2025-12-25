import { ThemeProvider, createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import * as React from "react";

const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
});

export default function AppThemeProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline enableColorScheme />
			{children}
		</ThemeProvider>
	);
}
