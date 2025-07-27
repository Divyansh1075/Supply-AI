# SupplyAI - AI-Powered Supply Chain Management Platform

A modern full-stack application that leverages artificial intelligence to optimize supply chain operations, connecting buyers with suppliers through intelligent matching and dynamic pricing.

## 🚀 Features

### Frontend Features

- **Modern React UI**: Built with React 18, TypeScript, and Tailwind CSS
- **Responsive Design**: Mobile-first approach with beautiful gradients and animations
- **Authentication System**: Complete signup/signin with JWT token management
- **Shopping Cart**: Weight-based pricing system with dynamic calculations
- **Product Catalog**: Advanced filtering and search capabilities
- **User Profile**: Comprehensive profile management with editable information
- **AI Engine**: Interactive AI-powered supplier matching interface

### Backend Features

- **RESTful API**: Express.js server with MongoDB integration
- **Authentication**: JWT-based authentication with bcrypt password hashing
- **Database Models**: Mongoose schemas for Users, Products, Suppliers, and Cart
- **Security**: Protected routes with middleware authentication
- **CORS Support**: Cross-origin resource sharing enabled
- **Environment Configuration**: Flexible environment variable management

## 🛠️ Tech Stack

### Frontend

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **React Router** for navigation
- **Lucide React** for icons
- **Context API** for state management

### Backend

- **Node.js** with Express.js
- **MongoDB** with Mongoose ODM
- **JWT** for authentication
- **bcryptjs** for password hashing
- **CORS** for cross-origin requests
- **dotenv** for environment variables

## 📦 Installation

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local installation or MongoDB Atlas)
- Git

### Clone the Repository

```bash
git clone https://github.com/yourusername/supplyai.git
cd supplyai
```

### Backend Setup

```bash
cd Backend
npm install
```

Create a `.env` file in the Backend directory:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/supplyai
JWT_SECRET=your-super-secret-jwt-key
NODE_ENV=development
```

Start the backend server:

```bash
npm run dev
```

### Frontend Setup

```bash
cd Frontend
npm install
```

Start the frontend development server:

```bash
npm run dev
```

## 🎯 Usage

1. **Start the Backend**: Navigate to the Backend directory and run `npm run dev`
2. **Start the Frontend**: Navigate to the Frontend directory and run `npm run dev`
3. **Access the Application**: Open your browser and go to `http://localhost:5174`

### Default Access

- Frontend: `http://localhost:5174`
- Backend API: `http://localhost:5000`

## 📁 Project Structure

```
supplyai/
├── Frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── context/        # React Context providers
│   │   └── ...
│   ├── public/             # Static assets
│   └── package.json
├── Backend/                 # Node.js backend application
│   ├── models/             # Mongoose database models
│   ├── routes/             # API route handlers
│   ├── middleware/         # Custom middleware
│   ├── server.js           # Main server file
│   └── package.json
└── README.md
```

## 🔑 API Endpoints

### Authentication

- `POST /api/auth/signup` - Register new user
- `POST /api/auth/signin` - User login
- `GET /api/auth/profile` - Get user profile (protected)
- `PUT /api/auth/profile` - Update user profile (protected)
- `PUT /api/auth/change-password` - Change password (protected)
- `POST /api/auth/logout` - Logout user (protected)

### Products

- `GET /api/products` - Get all products with filtering
- `GET /api/products/:id` - Get product by ID
- `POST /api/products` - Create new product (protected)
- `PUT /api/products/:id` - Update product (protected)
- `DELETE /api/products/:id` - Delete product (protected)

### Cart

- `GET /api/cart` - Get user's cart
- `POST /api/cart/add` - Add item to cart
- `PUT /api/cart/update` - Update cart item
- `DELETE /api/cart/remove/:id` - Remove item from cart
- `DELETE /api/cart/clear` - Clear entire cart

## 🎨 Key Features Implemented

### Authentication System

- Complete user registration and login
- JWT token-based authentication
- Protected routes and middleware
- User profile management
- Password encryption with bcrypt

### Shopping Cart

- Weight-based pricing system
- Dynamic price calculations
- Persistent cart state
- Add/remove/update functionality

### User Interface

- Responsive design with Tailwind CSS
- Dark theme with gradient accents
- Interactive components and animations
- Mobile-optimized navigation

### Database Integration

- MongoDB with Mongoose schemas
- User, Product, Supplier, and Cart models
- Data validation and relationships
- Efficient querying and filtering

## 🔒 Security Features

- JWT token authentication
- Password hashing with bcrypt
- Protected API routes
- Input validation and sanitization
- CORS configuration
- Environment variable protection

## 🚀 Deployment

### Backend Deployment

1. Set up MongoDB Atlas or your preferred MongoDB hosting
2. Configure environment variables for production
3. Deploy to platforms like Heroku, Railway, or DigitalOcean

### Frontend Deployment

1. Build the production version: `npm run build`
2. Deploy to platforms like Vercel, Netlify, or GitHub Pages

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Your Name** - _Initial work_ - [YourGitHub](https://github.com/yourusername)

## 🙏 Acknowledgments

- React team for the amazing framework
- MongoDB team for the robust database
- Tailwind CSS for the utility-first styling
- All contributors and the open-source community

## 📞 Support

For support, email your-email@example.com or join our Slack channel.

---

**Made with ❤️ using React, Node.js, and MongoDB**
