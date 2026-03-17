import Slide from "@mui/material/Slide";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import * as React from "react";

interface Props {
	children?: React.ReactElement<unknown>;
}

export default function HideOnScroll(props: Props) {
	const { children } = props;
	const trigger = useScrollTrigger();
	return (
		<Slide appear={false} direction="down" in={!trigger}>
			{children ?? <div />}
		</Slide>
	);
}
