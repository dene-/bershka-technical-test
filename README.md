# Bershka Technical Test - Nuxt 3, Typescript and Vitest

In this repo you can find Bershka's FE technical test. I decided to take a DDD approach to it, keeping it maintainable and simple (I know, overengineered).

This app consists of implementing a function to get a path given an array of categories (with their subcategories) and the path name, `getCategoryPath`.

I also included `pre-commit` hooks, to run linter and tests before doing a commit. Also deploy and testing github workflows which will test and lint the code on new PRs to the `main` branch.

## Table of Contents

- [Overview](#bershka-technical-test---nuxt-3-typescript-and-vitest)
- [Setup](#setup)
- [Development Server](#development-server)
- [Production](#production)
- [Run tests](#run-tests)
- [Run linter](#run-linter)

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

## Run tests

Run unit tests using vitest.

```bash
# npm
npm run test:unit

# pnpm
pnpm test:unit

# yarn
yarn test:unit

# bun
bun run test:unit
```

## Run linter

Run linter using ESLint. You can also fix errors using `lint:fix`.

```bash
# npm
npm run lint #lint:fix

# pnpm
pnpm lint #lint:fix

# yarn
yarn lint #lint:fix

# bun
bun run lint #lint:fix
```