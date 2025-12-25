import Slide from "@mui/material/Slide";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import * as React from "react";

interface Props {
	children?: React.ReactElement<unknown>;
}

export default function HideOnScroll(props: Props) {
	const { children } = props;
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger();

	return (
		<Slide appear={false} direction="down" in={!trigger}>
			{children ?? <div />}
		</Slide>
	);
}
