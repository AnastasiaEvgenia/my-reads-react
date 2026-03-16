import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

interface SkeletonProps {
	count?: number;
	height?: number;
	variant?: "text" | "rectangular" | "rounded" | "circular";
}

export function SkeletonLoader({
	count = 3,
	height = 10,
	variant = "rounded",
}: SkeletonProps) {
	return (
		<Box display="flex" flexDirection="column" gap={1}>
			{Array.from({ length: count }).map((_, i) => (
				<Skeleton
					key={i}
					variant={variant}
					height={height}
					animation="wave"
				/>
			))}
		</Box>
	);
}
