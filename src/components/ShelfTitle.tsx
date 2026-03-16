import Typography from "@mui/material/Typography";

export default function ShelfTitle({ title }: { title: string }) {
	return (
		<Typography variant="h4" component={"div"}>
			{title}
		</Typography>
	);
}
