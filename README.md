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

Each book has a menu that lets you move it between shelves. Clicking on a book opens a quick details drawer with more information about it. The main page also links to a **search page** (`/search`) where you can find new books by title or author. Books found in search show their current shelf status if already in your library — you can add or move them directly from search. Navigating back to the main page instantly reflects any changes made during search.

## Built With

| Library | Purpose |
|---|---|
| [React 19](https://react.dev/) | UI |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [TanStack Router](https://tanstack.com/router) | File-based routing |
| [TanStack Query](https://tanstack.com/query) | Server state & caching |
| [Material UI v7](https://mui.com/) | Component library |
| [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) | Form handling & validation |
| [Notistack](https://notistack.com/) | Notifications |
| [Vite](https://vitejs.dev/) | Build tool |
