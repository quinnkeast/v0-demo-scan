# Ditto Pay

Banking that moves with you. Ditto Pay is a web app for spending, saving, and
sending money — built with React, TypeScript, and Vite.

## Getting started

Install dependencies:

```sh
yarn install
```

Start the dev server:

```sh
yarn dev
```

The app runs at [http://localhost:5173](http://localhost:5173).

## Scripts

| Script         | Description                       |
| -------------- | --------------------------------- |
| `yarn dev`     | Start the local dev server        |
| `yarn build`   | Type-check and build for production |
| `yarn preview` | Preview the production build      |
| `yarn lint`    | Run ESLint                        |

## Internationalization

Ditto Pay ships in English and Spanish. Translations live in
`src/i18n/locales/<locale>/translation.json` and are wired up with
[react-i18next](https://react.i18next.com/). The active language follows the
user's browser preference and can be changed from **Settings → Language**.

To add a locale, create a new folder under `src/i18n/locales/` and register it
in `src/i18n/index.ts`.

## Project structure

```
src/
  components/        Shared layout (sidebar, top bar)
  features/          Feature areas (dashboard, transactions, payments, cards, settings)
  i18n/              i18next config + locale files
```
