import IconButton from "@mui/material/IconButton";
import { Link } from "@tanstack/react-router";
import { ArrowBack } from "@mui/icons-material";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";

export function SearchInput({
	setSearchQuery,
}: {
	setSearchQuery: (query: string) => void;
}) {
	const [inputValue, setInputValue] = useState("");

	useEffect(() => {
		const timer = setTimeout(() => {
			setSearchQuery(inputValue);
		}, 300); // 300ms debounce delay

		return () => clearTimeout(timer);
	}, [inputValue]);

	return (
		<Paper
			component="form"
			sx={{
				p: "2px 4px",
				display: "flex",
				alignItems: "center",
				width: "100%",
			}}
		>
			<IconButton component={Link} to={"/"}>
				<ArrowBack />
			</IconButton>
			<InputBase
				sx={{ ml: 1, flex: 1 }}
				placeholder="Search Books"
				inputProps={{ "aria-label": "search books" }}
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>
			<SearchIcon />
		</Paper>
	);
}
