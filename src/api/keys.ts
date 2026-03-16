export const booksKeys = {
	all: ["books"] as const,
	booksList: () => [...booksKeys.all, "list"] as const,
};
