import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import { useRouter } from "@tanstack/react-router";
import HideOnScroll from "./HideOnScroll";
import { useAuth } from "@/hooks/useAuth.ts";
import { Route } from "@/routes/_authenticated.tsx";

export default function Header() {
	const { user, logout } = useAuth();
	const router = useRouter();
	const navigate = Route.useNavigate();

	const handleLogout = () => {
		logout().then(() => {
			router.invalidate().finally(() => {
				navigate({ to: "/" });
			});
		});
	};
	return (
		<HideOnScroll>
			<AppBar>
				<Toolbar
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<Typography variant="h5" component="div">
						MyReads
						<Typography
							variant="caption"
							component="div"
							color={"warning"}
						>
							Welcome {user}!
						</Typography>
					</Typography>
					<IconButton aria-label="logout" onClick={handleLogout}>
						<LogoutIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
		</HideOnScroll>
	);
}
