Vibe Commerce — Full Stack E-Com Cart

A functional mock shopping cart built for internship screening.

Overview

A full-stack shopping cart app where users can browse products, add/remove items from cart, update quantities, and perform a mock checkout.
This project demonstrates UI/UX, API handling, database integration, and clean component-based architecture.

| Layer      | Technology                  |
| ---------- | --------------------------- |
| Frontend   | React (Vite) + Tailwind CSS |
| Backend    | Node.js + Express.js        |
| Database   | MongoDB (Mongoose ORM)      |
| API Format | REST                        |
| Extras     | Axios, dotenv, cors         |

Features

✅ Products Page – Displays mock items fetched from backend or Fake Store API.
✅ Cart Drawer – Add/remove/update quantity dynamically.
✅ Total Calculation – Auto-updates when quantity changes.
✅ Checkout Modal – Collects name/email and shows a receipt summary.
✅ Error Handling – Backend + frontend both show user-friendly error messages.
✅ Responsive Design – Fully functional across mobile and desktop.


📁 Project Structure

vibe-commerce/
│
├── backend/
│   ├── server.js
│   ├── models/
│   │   ├── Product.js
│   │   └── Cart.js
│   ├── routes/
│   │   ├── productRoutes.js
│   │   └── cartRoutes.js
│   ├── .env
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── ProductGrid.jsx
    │   │   └── CartDrawer.jsx
    │   ├── api.js
    │   └── App.jsx
    ├── index.html
    ├── tailwind.config.js
    ├── vite.config.js
    └── package.json

    ⚡ Setup Instructions
🔹 Clone the repository
git clone https://github.com/<your-username>/vibe-commerce.git
cd vibe-commerce

🔹 Backend Setup
PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net
DB_NAME=ProductData

Start server: npm start
API will run on → http://localhost:5000/api


🔹 Frontend Setup
cd ../frontend
npm install

VITE_API_BASE=http://localhost:5000/api

Run development server: npm run dev
App will run on → http://localhost:5173

| Method   | Endpoint        | Description                           |
| -------- | --------------- | ------------------------------------- |
| `GET`    | `/api/products` | Fetch all products                    |
| `POST`   | `/api/cart`     | Add item to cart `{ productId, qty }` |
| `GET`    | `/api/cart`     | Get all items in cart + total         |
| `DELETE` | `/api/cart/:id` | Remove item from cart                 |
| `POST`   | `/api/checkout` | Mock checkout + receipt               |

Bonus Implementation
 DB persistence (MongoDB)
 Error handling for all API calls
 Fake Store API product integration
 Responsive Tailwind design
 JWT Auth (future scope)


