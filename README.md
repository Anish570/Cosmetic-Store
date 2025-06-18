![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

# 💄 Cosmetic Store – Frontend

Welcome to the **Cosmetic Store** frontend — a modern, scalable, and performance-optimized **React** e-commerce web app for beauty and jewelry products. This project is built with **Vite**, **Tailwind CSS**, and industry best practices to ensure a seamless user experience and easy future scaling.

> 🎯 This is the frontend-only repo. Backend APIs are handled separately via a dedicated Node.js & MongoDB service.

---

## 📸 Preview

![Cosmetic  Store Preview](./public/preview.png)

---

## ✨ Features

- 🛍️ Product listing with category filtering
- 👁️‍🗨️ Beautiful product detail view
- 🛒 Cart & Wishlist management
- 🔐 JWT-based user login/signup
- 💨 Blazing-fast performance (Vite + Code Splitting)
- 📱 Responsive across all devices
- 🎨 Tailwind CSS for consistent design
- ⚙️ Easy integration with any REST API

---

## ⚙️ Tech Stack

| Tool             | Role                                |
| ---------------- | ----------------------------------- |
| React 18+        | UI framework                        |
| Vite             | Lightning-fast build tool           |
| Tailwind CSS     | Utility-first styling               |
| React Router DOM | Client-side routing                 |
| Axios            | API communication                   |
| Framer Motion    | Smooth animations                   |
| React Helmet     | SEO metadata                        |
| Context API      | Global state (auth, cart, wishlist) |

---

## 📁 Project Structure

```bash
Cosmetic -store-client/
├── public/ # Static assets
├── src/
│ ├── assets/ # Images, fonts, logos
│ ├── components/ # Reusable UI blocks
│ ├── context/ # Global providers (Auth, Cart)
│ ├── features/ # Feature modules (auth, cart, products)
│ ├── hooks/ # Custom React hooks
│ ├── pages/ # Route-level components
│ ├── routes/ # React Router configuration
│ ├── services/ # Axios API logic
│ ├── utils/ # Helper functions
│ ├── App.jsx # Root component
│ └── main.jsx # Entry file (Vite)
├── .env
├── package.json
└── tailwind.config.js

```

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Anish570/Cosmetic-Store.git
cd Cosmetic-Store
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Setup environment variables

```bash
# Create a .env file in the root:
VITE_API_BASE_URL=https://api.example.com/api
```

### 4️⃣ Start the development server

```bash
npm run dev
#App will run at: http://localhost:5173
```

### 🧠 Available Scripts

| Command           | Purpose                   |
| ----------------- | ------------------------- |
| `npm run dev`     | Start dev server          |
| `npm run build`   | Build for production      |
| `npm run preview` | Preview built app locally |
| `npm run lint`    | Run ESLint                |

### 📌 Pages

- `/` – Home (hero, featured products, CTA)

- `/products` – All products with filters

- `/product/:id` – Product details

- `/cart` – Cart page

- `/login` / `/signup` – Auth pages

- `/checkout` – Checkout summary

- `/wishlist` – Saved items (optional)

- `*` – 404 not found

### 📷 UI Components

- Navbar with cart/auth links

- Hero section with banner

- ProductCard (for grid listing)

- FilterSidebar (for categories/sorting)

- Toast & Loader components

- Responsive drawer/modals for cart/wishlist

---

### 🌐 Deployment

You can deploy the frontend easily on:

- Vercel (Recommended)

- Netlify

- GitHub Pages

---

### 🤝 Contributing

Pull requests are welcome! If you find any bugs or want to suggest enhancements, feel free to open an issue or fork the project.

### 🛡 License ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

This project is licensed under the MIT License.

## 🙋‍♀️ About

Cosmetic Store is a handcrafted e-commerce platform built for small-scale beauty & jewelry brands looking to go digital with style and speed.

Made with 💖 by Anish
