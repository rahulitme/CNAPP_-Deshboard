# Dynamic Dashboard App

A modern, customizable dashboard built with React, Redux Toolkit, Vite, and Chart.js. Easily add, remove, and search widgets in multiple categories.

## Features
- Add/remove widgets to any category
- Search widgets by name
- Chart support (Doughnut, Bar) via Chart.js
- Modular component structure
- Redux Toolkit for state management
- Responsive, clean UI

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm

### Installation
```bash
npm install
```

### Running the App
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure
```
dashboard-app/
├─ index.html
├─ package.json
├─ vite.config.js
├─ src/
│  ├─ main.jsx
│  ├─ App.jsx
│  ├─ styles.css
│  ├─ app/
│  │  └─ store.js
│  ├─ data/
│  │  └─ initialData.json
│  ├─ features/
│  │  └─ dashboard/
│  │     └─ dashboardSlice.js
│  └─ components/
│     ├─ Header.jsx
│     ├─ Category.jsx
│     ├─ WidgetCard.jsx
│     ├─ AddWidgetModal.jsx
│     └─ WidgetList.jsx
```

## Customization
- Edit `src/data/initialData.json` to change categories and default widgets.
- Add new chart types in `WidgetCard.jsx`.
- Update styles in `src/styles.css` for your brand.

## License
MIT
