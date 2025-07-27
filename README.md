# SupplyAI - AI-Powered Supply Chain Management Platform

A full-stack web application built with React, TypeScript, Node.js, and MongoDB. Features include user authentication, shopping cart with weight-based pricing, product catalog, and user profile management.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16+)
- MongoDB (local or Atlas)
- Git

### 1. Clone & Install
```bash
git clone https://github.com/Divyansh1075/Supply-AI.git
cd Supply-AI

# Install backend dependencies
cd Backend
npm install

# Install frontend dependencies
cd ../Frontend
npm install
```

### 2. Environment Setup
Create `.env` file in the `Backend` directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/supplyai
JWT_SECRET=your-super-secret-jwt-key-here
NODE_ENV=development
```

### 3. Start the Application
```bash
# Terminal 1: Start Backend (from Backend directory)
cd Backend
npm run dev

# Terminal 2: Start Frontend (from Frontend directory)
cd Frontend
npm run dev
```

### 4. Access the App
- **Frontend**: http://localhost:5174
- **Backend API**: http://localhost:5000

## 🛠️ Tech Stack
- **Frontend**: React 18, TypeScript, Tailwind CSS, Vite
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Authentication**: JWT with bcrypt
- **State Management**: React Context API

## 📁 Project Structure
```
Supply-AI/
├── Frontend/           # React frontend
│   ├── src/
│   │   ├── components/ # UI components
│   │   ├── pages/      # Page components
│   │   ├── context/    # React contexts
│   │   └── ...
│   └── package.json
├── Backend/            # Node.js backend
│   ├── routes/         # API routes
│   ├── models/         # MongoDB models
│   ├── server.js       # Main server
│   └── package.json
└── README.md
```

## 🔑 Key Features
- **Authentication**: Sign up/Sign in with JWT
- **Shopping Cart**: Weight-based pricing system
- **Product Catalog**: Browse and filter products
- **User Profile**: Manage account information
- **Responsive Design**: Works on all devices

## 🤝 Contributing
1. Fork the repository
2. Create your feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License
This project is licensed under the MIT License.

---
**Built with React, Node.js, and MongoDB**
