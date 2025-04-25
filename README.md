# Padre Gino's React App

This is a React + Vite project for a fictional pizza ordering web application called **Padre Gino's**. It includes routing, lazy loading, API integration, tests, and UI components for a clean and efficient frontend experience.

---

## ✨ Features

- **React with Vite** for fast development
- **File-based routing** with lazy-loaded components
- **Vitest** for testing and test coverage
- **API folder** for managing request logic
- **Global state management** via `contexts.jsx`
- **Code formatting** using Prettier and ESLint
- **Snapshot & node-based tests** in `__tests__`

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

### 3. Build for Production

```bash
npm run build
```

### 4. Preview Production Build

```bash
npm run preview
```

---

## ✅ Testing

### Run All Tests

```bash
npm run test
```

### Run with UI

```bash
npm run test:ui
```

### Generate Coverage Report

```bash
npm run coverage
```

- Output will appear in the `/coverage` folder

---

## 📂 Project Structure

```
.
├── src/
│   ├── __tests__               # Unit and integration tests
│   ├── api/                    # API request functions
│   ├── routes/                 # Route components (lazy loaded)
│   ├── App.jsx                 # Main app component
│   ├── Cart.jsx                # Cart page
│   ├── Pizza.jsx               # Pizza listings
│   ├── Modal.jsx, Header.jsx   # Reusable UI components
│   └── contexts.jsx            # Context providers
├── coverage/                   # Test coverage output
├── public/                     # Static assets
├── vite.config.js              # Vite configuration
├── package.json                # NPM scripts and dependencies
└── vitest.workspace.js         # Vitest workspace configuration
```

---

## 🚜 Routing

Routes are defined in `routes/` using lazy-loaded files like:

- `index.lazy.jsx`
- `order.lazy.jsx`
- `past.lazy.jsx`

These are automatically picked up using route generation tooling (see `routeTree.gen.ts`).

---

## 🌭 API Endpoints

- `getPastOrder.js`
- `getPastOrders.js`
- `postContact.js`

Use these to interact with backend endpoints for orders and contact forms.

---

## ⚖️ Linting & Formatting

Run Prettier:

```bash
npm run format
```

Run Linting:

```bash
npm run lint
```

Auto-fix lint errors:

```bash
npm run lint:fix
```

---

## 🙏 Acknowledgements

Built with ❤️ using React, Vite, and Vitest.
