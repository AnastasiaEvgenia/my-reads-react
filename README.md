# MyReads

A virtual bookshelf app where you can organize books across shelves and discover new ones.

**Live demo:** [anastasiaevgenia.github.io/my-reads-react](https://anastasiaevgenia.github.io/my-reads-react/)

## Install & Run

1. Clone the repository and navigate to the project folder:

```bash
git clone https://github.com/anastasiaevgenia/my-reads-react.git
cd my-reads-react
```

2. Install all project dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## About

The main page displays three shelves:

- **Currently Reading**
- **Want to Read**
- **Read**

### Features

- **Move books between shelves** — use the menu on each book card to change its shelf
- **Drag and drop** — drag a book and drop it directly onto another shelf
- **Book details** — click any book to open a quick details drawer with more information
- **Search** — find new books by title or author via the search page (`/search`)
- **Shelf status in search** — books already in your library show their current shelf in search results
- **Instant sync** — navigating back to the main page immediately reflects all changes made in search

## Built With

| Library | Purpose |
|---|---|
| [React 19](https://react.dev/) | UI |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [TanStack Router](https://tanstack.com/router) | File-based routing |
| [TanStack Query](https://tanstack.com/query) | Server state & caching |
| [Material UI v7](https://mui.com/) | Component library |
| [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) | Form handling & validation |
| [dnd-kit](https://dndkit.com/) | Drag and drop |
| [Notistack](https://notistack.com/) | Notifications |
| [Vite](https://vitejs.dev/) | Build tool |
