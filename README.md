
# 🛒 Singleclic Task

An elegant and clean React application for a fake online store using data from the [Fake Store API](https://fakestoreapi.com/). This project demonstrates clean code architecture principles, efficient state management with React Query, and a smooth user experience with a modern responsive UI.

---

## 🔥 Features

- 🛍️ Display all products in a responsive grid layout
- 🔍 Search bar to filter products by title
- 📂 Category filter to view specific product types
- ➕ Add to Cart directly from product cards
- 🛒 Shopping cart with real-time item count and total price
- 🧾 Cart page with two-column layout (products + order summary)
- 💰 Checkout button (UI level)
- 📦 Product Details page with full product info
- ⚠️ 404 Not Found page for unknown routes
- ⏳ Loading spinners for API requests
- ✅ Fully responsive and clean UI
- ♻️ Clean code architecture with reusable hooks and API layers

---

## 🧱 Tech Stack

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [React Query (TanStack)](https://tanstack.com/query/latest)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)

---

## 🚀 How to Run Locally

1. **Clone the repo:**

   ```bash
   git clone https://github.com/samx774/singleclic_task.git
   cd singleclic_task
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. **Open your browser at:**

   ```
   http://localhost:5173
   ```

---

## 📁 Project Structure (Clean Architecture)

```
src/
│
├── components/         // Reusable UI components (Navbar, Loader, etc.)
├── hooks/              // Custom hooks (React Query abstraction)
├── pages/              // Page-level components (Home, Cart, ProductDetails)
├── services/           // API service layer with Axios and interceptors
├── context/            // Cart context (state management)
├── assets/             // Static files and images (if any)
├── App.jsx             // Main router and layout
└── main.jsx            // App entry point
```

---

## 🤝 Author

**Singleclic Task by Samir Ashraf**  
Feel free to reach out for any questions or improvements ✨

---
