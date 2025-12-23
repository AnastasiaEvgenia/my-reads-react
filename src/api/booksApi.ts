const api = "https://reactnd-books-api.udacity.com";

interface ImageLinks {
	smallThumbnail?: string;
	thumbnail?: string;
}

type Shelf = "currentlyReading" | "wantToRead" | "read" | "none";

export interface Book {
	id: string;
	title: string;
	authors?: Array<string>;
	imageLinks?: ImageLinks;
	shelf?: Shelf;
	[key: string]: unknown;
}

type HeadersObject = Record<string, string>;

let token = localStorage.token as string | undefined;

if (!token) token = localStorage.token = Math.random().toString(36).slice(-8);

const headers: HeadersObject = {
	Accept: "application/json",
	Authorization: token,
};

export const get = (bookId: string): Promise<Book> =>
	fetch(`${api}/books/${bookId}`, { headers })
		.then((res) => res.json())
		.then((data: { book: Book }) => data.book);

export const getAll = (): Promise<Array<Book>> =>
	fetch(`${api}/books`, { headers })
		.then((res) => res.json())
		.then((data: { books: Array<Book> }) => data.books);

export const update = (
	book: { id: string } | string,
	shelf: Shelf | string,
): Promise<unknown> =>
	fetch(`${api}/books/${typeof book === "string" ? book : book.id}`, {
		method: "PUT",
		headers: {
			...headers,
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ shelf }),
	}).then((res) => res.json());

export const search = (
	query: string,
	maxResults?: number,
): Promise<Array<Book>> =>
	fetch(`${api}/search`, {
		method: "POST",
		headers: {
			...headers,
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ query, maxResults }),
	})
		.then((res) => res.json())
		.then((data: { books?: Array<Book> }) => data.books || []);
