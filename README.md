# Reco

A client-side React single-page app built with Vite, React Router, and MUI.

## Tech Stack

- ⚡️ [Vite](https://vite.dev/) — dev server and build
- ⚛️ React 19
- 🔀 [React Router 8](https://reactrouter.com/) (declarative mode, `BrowserRouter`)
- 🎨 [MUI](https://mui.com/material-ui/) + Emotion for styling
- 🔒 TypeScript by default

## Getting Started

### Installation

Install the dependencies:

```bash
bun install
```

### Development

Start the development server with HMR:

```bash
bun run dev
```

Your application will be available at `http://localhost:5173`.

### Typecheck

```bash
bun run typecheck
```

## Building for Production

Create a production build:

```bash
bun run build
```

Preview the production build locally:

```bash
bun run preview
```

## Project Structure

```
app/
  routes/          # route components (thin, composed with Layout)
    home.tsx
    dashboard.tsx
    paths.ts        # shared route path constants
  components/       # shared, reusable UI (e.g. Layout)
  hooks/            # shared hooks
  lib/              # framework-agnostic utilities
  App.tsx           # route table
  main.tsx          # app entry point
  theme.ts          # MUI theme
```

As the app grows, group domain-specific code (components, hooks, API calls) under a `features/<name>/` folder instead of the shared `components/`/`hooks`/`lib` directories — reserve those for code actually shared across features.

The `~` import alias points to `app/` (see `vite.config.ts`).
