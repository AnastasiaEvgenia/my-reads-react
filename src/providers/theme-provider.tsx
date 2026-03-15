import { GlobalStyles, ThemeProvider, createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import * as React from "react";

const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
});

const globalStyles = {
	html: {
		height: "100%",
	},
	body: {
		height: "100%",
		margin: 0,
		padding: 0,
	},
	"#app": {
		height: "100%",
		display: "flex",
		flexDirection: "column",
	},
};

export default function AppThemeProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline enableColorScheme />
			<GlobalStyles styles={globalStyles} />
			{children}
		</ThemeProvider>
	);
}
