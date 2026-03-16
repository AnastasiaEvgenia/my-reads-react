const api = "https://reactnd-books-api.udacity.com";

export type Shelf = "currentlyReading" | "wantToRead" | "read" | "none";

export interface IndustryIdentifier {
	type: string; // "ISBN_13" or "ISBN_10"
	identifier: string; // "9781593273897"
}

export interface ReadingModes {
	text: boolean; // true
	image: boolean; // false
}

export interface PanelizationSummary {
	containsEpubBubbles: boolean; // false
	containsImageBubbles: boolean; // false
}

export interface ImageLinks {
	smallThumbnail?: string; // "http://books.google.com/books/content?id=...&zoom=5"
	thumbnail?: string; // "http://books.google.com/books/content?id=...&zoom=1"
}

export interface Book {
	id: string; // "nggnmAEACAAJ"
	title: string; // "The Linux Command Line"
	subtitle?: string; // "A Complete Introduction"
	authors?: Array<string>; // ["William E. Shotts, Jr."]
	publisher?: string; // "No Starch Press"
	publishedDate?: string; // "2012"
	description?: string; // "You've experienced the shiny, point-and-click surface..."
	industryIdentifiers?: Array<IndustryIdentifier>; // [{ type: "ISBN_13", identifier: "9781593273897" }]
	readingModes?: ReadingModes; // { text: true, image: false }
	pageCount?: number; // 480
	printType?: string; // "BOOK"
	categories?: Array<string>; // ["COMPUTERS"]
	averageRating?: number; // 4
	ratingsCount?: number; // 2
	maturityRating?: string; // "NOT_MATURE"
	allowAnonLogging?: boolean; // true
	contentVersion?: string; // "1.2.2.0.preview.2"
	panelizationSummary?: PanelizationSummary; // { containsEpubBubbles: false, containsImageBubbles: false }
	imageLinks?: ImageLinks; // { smallThumbnail: "http://...", thumbnail: "http://..." }
	language?: string; // "en"
	previewLink?: string; // "http://books.google.com/books?id=..."
	infoLink?: string; // "https://play.google.com/store/books/details?id=..."
	canonicalVolumeLink?: string; // "https://market.android.com/details?id=book-..."
	shelf?: Shelf; // "currentlyReading"
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
	bookId: string,
	shelf: Shelf | string,
): Promise<unknown> =>
	fetch(`${api}/books/${bookId}`, {
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
		.then(
			(data: {
				books?: Array<Book> | { error: string; items: Array<Book> };
			}) => {
				if (
					data.books &&
					typeof data.books === "object" &&
					!Array.isArray(data.books)
				) {
					return "error" in data.books ? [] : data.books;
				}
				// If books is an array, return it; otherwise return empty array
				return Array.isArray(data.books) ? data.books : [];
			},
		);
