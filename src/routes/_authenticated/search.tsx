import { createFileRoute } from "@tanstack/react-router";
import { BookSearch } from "@/components/BookSearch.tsx";

export const Route = createFileRoute("/_authenticated/search")({
	component: RouteComponent,
});

function RouteComponent() {
	return <BookSearch />;
}
