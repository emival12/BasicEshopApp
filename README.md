# BasicEshopApp

A  React Native e-commerce application built with Expo and TypeScript.

Built as a deliberate learning exercise: after years of web development with React and LWC, I wanted to understand concretely how React paradigms translate to native mobile development, and where the two ecosystems diverge.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React Native (Expo) |
| Language | TypeScript |
| Routing | Expo Router (file-based) |
| State Management | React Context API |
| Testing | Jest |

---

## Architecture

The project is structured to maintain a clean separation of concerns, even at this scale:

```
├── app/              # File-based routing (Expo Router) — each file is a screen
├── context/          # Global state (cart) via React Context API
├── types/            # Shared TypeScript interfaces and type definitions
├── utils/            # Pure utility functions
├── constants/        # App-wide constants including mock product data
└── __tests__/        # Unit tests
```

---

## What I Transferred from Web Development

Coming from React and TypeScript on the web, several patterns carried over directly:

- **Context API** for shared state — the same pattern I used in my React web projects, applied here for cart management across screens
- **Custom hooks** to separate logic from presentation — a habit from building reusable components in enterprise environments
- **TypeScript** across the full codebase, with shared interfaces in a dedicated `types/` folder

---

## What I Found Different

The most significant differences compared to web development:

- **No CSS.** Styling is done entirely through `StyleSheet` objects. There is no cascade, no class inheritance, no selectors — every component is styled explicitly. This took adjustment.
- **Layout defaults differently.** Flexbox is the only layout system, and the default `flexDirection` is `column` rather than `row`. Small difference, constant source of recalibration.
- **The environment itself is the constraint.** On the web, the browser handles a lot silently. In React Native, you are more directly aware of the platform — safe area insets, keyboard behaviour, and scroll handling all require explicit attention in a way they don't on the web.

---

## Screens

- **Product Listing** — scrollable grid of 50 products with availability state
- **Product Detail** — individual product view with stock information
- **Cart** — managed via Context API, persisted across navigation

---

## Scope and Honest Context

This is a tutorial-level project. The data is static and locally generated — there is no backend. The goal was not to ship a product but to get enough hands-on experience with the React Native ecosystem to understand what building a real mobile application would involve.

It is intentionally simple. The value is in the familiarity gained, not the features built.


