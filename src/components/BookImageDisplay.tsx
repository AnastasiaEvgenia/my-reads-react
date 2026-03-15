import { Box, CardMedia } from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";

export default function BookImageDisplay({
	imageUrl,
	title,
}: {
	imageUrl: string | null;
	title: string | null;
}) {
	return (
		<>
			{imageUrl ? (
				<Box
					sx={{
						height: 200,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						background: "rgba(255, 255, 255, 0.02)",
						borderTopLeftRadius: 8,
						borderTopRightRadius: 8,
						overflow: "hidden",
					}}
				>
					<CardMedia
						component="img"
						image={imageUrl}
						alt={title || ""}
						sx={{
							maxHeight: "100%",
							maxWidth: "100%",
							objectFit: "contain",
						}}
					/>
				</Box>
			) : (
				<Box
					sx={{
						height: 200,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						background: "rgba(255, 255, 255, 0.02)",
						borderTopLeftRadius: 8,
						borderTopRightRadius: 8,
					}}
				>
					<MenuBookIcon
						sx={{
							fontSize: 50,
							color: "rgba(255, 255, 255, 0.2)",
						}}
					/>
				</Box>
			)}
		</>
	);
}
