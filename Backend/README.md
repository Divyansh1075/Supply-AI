# SupplyAI Backend

Backend server for the SupplyAI application built with Node.js, Express.js, and MongoDB using Mongoose ODM.

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn package manager

### Installation

1. **Navigate to the Backend directory:**

   ```bash
   cd Backend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   ```bash
   cp .env.example .env
   ```

   Edit the `.env` file with your configuration:

   ```env
   MONGODB_URI=mongodb://localhost:27017/supplyai_db
   PORT=5000
   NODE_ENV=development
   JWT_SECRET=your_super_secret_jwt_key_here
   ```

4. **Start MongoDB:**

   - **Local MongoDB:** Make sure MongoDB service is running
   - **MongoDB Atlas:** Use your Atlas connection string in `.env`

5. **Seed the database (optional):**

   ```bash
   node seed.js
   ```

6. **Start the development server:**
   ```bash
   npm run dev
   ```

The server will start on `http://localhost:5000`

## 📁 Project Structure

```
Backend/
├── models/           # Mongoose schemas and models
│   └── index.js      # Product, Supplier, Cart models
├── routes/           # API route handlers
│   ├── products.js   # Product CRUD operations
│   └── cart.js       # Cart management
├── bd.js            # Database connection setup
├── server.js        # Express server configuration
├── seed.js          # Database seeding script
├── package.json     # Dependencies and scripts
└── .env.example     # Environment variables template
```

## 🔧 API Endpoints

### Products API

- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `POST /api/products` - Create new product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product
- `POST /api/products/:id/reviews` - Add product review

**Query Parameters for GET /api/products:**

- `category` - Filter by category (vegetables, fruits, herbs)
- `search` - Search by product name
- `minPrice` & `maxPrice` - Price range filter
- `sortBy` - Sort by name, price-low, price-high, rating
- `page` & `limit` - Pagination

### Cart API

- `GET /api/cart/:sessionId` - Get cart by session ID
- `POST /api/cart/:sessionId/items` - Add item to cart
- `PUT /api/cart/:sessionId/items/:productId` - Update cart item
- `DELETE /api/cart/:sessionId/items/:productId` - Remove item from cart
- `DELETE /api/cart/:sessionId` - Clear entire cart

## 📊 Database Schema

### Product Schema

```javascript
{
  name: String (required),
  description: String (required),
  category: String (enum: vegetables, fruits, herbs, etc.),
  price: Number (required),
  unit: String (kg, g, lb, etc.),
  image: String (required),
  rating: Number (0-5),
  reviews: Array,
  stock: Number (required),
  supplier: ObjectId (ref: Supplier),
  discount: Number (0-100),
  isActive: Boolean
}
```

### Supplier Schema

```javascript
{
  name: String (required),
  email: String (required, unique),
  phone: String (required),
  address: Object,
  specialties: Array,
  rating: Number (0-5),
  isVerified: Boolean,
  joinedDate: Date
}
```

### Cart Schema

```javascript
{
  sessionId: String (required, unique),
  items: Array [{
    product: ObjectId (ref: Product),
    quantity: Number,
    weight: Number,
    totalPrice: Number
  }],
  totalAmount: Number,
  totalItems: Number
}
```

## 🛠️ Available Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `node seed.js` - Seed database with sample data

## 🔐 Environment Variables

Create a `.env` file in the Backend directory:

```env
# Database
MONGODB_URI=mongodb://localhost:27017/supplyai_db

# Server
PORT=5000
NODE_ENV=development

# JWT (for future authentication)
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRE=30d
```

## 🌐 MongoDB Setup Options

### Option 1: Local MongoDB

1. Install MongoDB Community Edition
2. Start MongoDB service
3. Use connection string: `mongodb://localhost:27017/supplyai_db`

### Option 2: MongoDB Atlas (Cloud)

1. Create account at [MongoDB Atlas](https://cloud.mongodb.com)
2. Create a new cluster
3. Get connection string and update `.env`
4. Example: `mongodb+srv://username:password@cluster.mongodb.net/supplyai_db`

## 🧪 Testing the API

You can test the API using tools like:

- Postman
- Thunder Client (VS Code extension)
- curl commands

### Sample API Calls

```bash
# Get all products
curl http://localhost:5000/api/products

# Get vegetables only
curl http://localhost:5000/api/products?category=vegetables

# Search for tomatoes
curl http://localhost:5000/api/products?search=tomato

# Add item to cart
curl -X POST http://localhost:5000/api/cart/session123/items \
  -H "Content-Type: application/json" \
  -d '{"productId": "PRODUCT_ID", "weight": 1.5}'
```

## 🚀 Deployment

For production deployment:

1. Set `NODE_ENV=production` in your environment
2. Use a production MongoDB instance
3. Set up proper security (authentication, rate limiting, etc.)
4. Use a process manager like PM2
5. Set up reverse proxy with Nginx

## 📝 Notes

- The server uses session-based cart management (no authentication required)
- All prices are stored per kg/g and calculated based on weight
- Products include rating system and review functionality
- Supplier verification system is included
- Database includes proper indexes for performance

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request
