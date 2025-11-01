Vikson International Medisys

🌐 Live Website: https://viksoninternationalmedisys.com

Vikson International Medisys is a modern, full-stack web application built to showcase the company’s medical and industrial product portfolio with a responsive UI, product management dashboard, and backend API powered by MongoDB.


<img width="1900" height="865" alt="image" src="https://github.com/user-attachments/assets/726fd513-ab45-4c73-9e97-91f8ca914cd3" />


✨ Key Highlights

Full-stack MERN architecture (React + Node.js + MongoDB)

Fully responsive — works on mobile, tablet, and desktop

Dynamic product listing with category filtering

Admin Panel for managing products, categories & media

Optimized build for fast performance on Vite

Deployed with SSL and live API connection

🧠 Tech Stack
Frontend

Vite + React + TypeScript

Tailwind CSS for styling

Lucide Icons & shadcn/ui components

Axios for backend API communication

React Router DOM for navigation

Backend

Node.js + Express.js

MongoDB + Mongoose

CORS, dotenv, multer for configuration & uploads

REST API endpoints for all CRUD operations

📂 Folder Structure
viksonInternational-main/
├── client/                 # Frontend (Vite + React)
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── pages/          # Pages (Home, Products, Contact, etc.)
│   │   ├── api.js          # Centralized API handler
│   │   ├── config.js       # Environment-based backend URL
│   │   └── App.tsx         # App entry with routes
│   └── public/             # Static assets
├── server/                 # Backend (Express)
│   ├── routes/             # Express route files
│   ├── controllers/        # Controller logic
│   ├── models/             # MongoDB schema models
│   ├── config/             # Database connection
│   └── index.js            # Server entry point
├── .env                    # Environment variables (server)
├── vite.config.ts          # Vite configuration
├── package.json            # Root scripts and dependencies
└── README.md               # Project documentation

⚙️ Environment Variables
Client (/client/.env.development):
VITE_API_BASE_URL=http://localhost:4003/api

Client (/client/.env.production):
VITE_API_BASE_URL=https://viksoninternationalmedisys.com/api

Server (/server/.env):
PORT=4003
MONGODB_URI=your_mongodb_connection_string

🚀 Installation & Local Setup

Clone the repository

git clone https://github.com/yourusername/viksonInternational.git
cd viksonInternational-main
<img width="1899" height="868" alt="image" src="https://github.com/user-attachments/assets/b1ce3a89-acab-4a07-b34e-6f485fb112a4" />


Install dependencies

npm install
cd client && npm install
cd ../server && npm install


Run the app (both frontend + backend concurrently)

npm run dev


Open your browser → http://localhost:5173

🧰 Useful Scripts
Command	Description
npm run dev	Run both frontend & backend concurrently
npm run build	Build both frontend & backend
npm start	Run production build
npm run dev:backend	Run backend only
npm run dev:frontend	Run frontend only
🌐 Deployment

Frontend (Vite Build)

cd client
npm run build


Upload the dist folder to your web server (e.g., /www/wwwroot/viksoninternationalmedisys.com).

Backend (Express API)

cd server
npm run build
pm2 start dist/server/index.js --name vikson-api


Nginx Configuration

Serve frontend via /

Proxy /api → http://localhost:4003

📦 API Overview
Endpoint	Method	Description
/api/products	GET	Fetch all products
/api/products/:id	GET	Fetch single product
/api/products	POST	Create product (admin)
/api/products/:id	PUT	Update product
/api/products/:id	DELETE	Delete product
📱 Frontend Routes
Path	Description
/	Home page
/about	About company
/products	Product catalog
/contact	Contact form
/quote	Get a quote
/admin	Admin login/dashboard
🔒 Security Recommendations
<img width="1791" height="803" alt="image" src="https://github.com/user-attachments/assets/f2092b06-ba34-4e70-b99b-e966c3fa1bc1" />

Never push .env files publicly

Use HTTPS for API routes

Add JWT auth for admin access

Validate file uploads (if enabled)

Enable CORS only for your domain

🧾 License

Proprietary — All rights reserved by Vikson International Medisys Pvt. Ltd.
For business inquiries, visit https://viksoninternationalmedisys.com

<img width="1899" height="870" alt="image" src="https://github.com/user-attachments/assets/ae3fc85f-8238-45d8-b724-6ccd8e003da1" />

