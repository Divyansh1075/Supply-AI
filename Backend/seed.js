const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { Product, Supplier } = require('./models');

// Load environment variables
dotenv.config();

// Sample suppliers data
const suppliers = [
  {
    name: "Fresh Farm Co.",
    email: "contact@freshfarm.com",
    phone: "+1-555-0123",
    address: {
      street: "123 Farm Road",
      city: "Green Valley",
      state: "CA",
      country: "USA",
      zipCode: "90210"
    },
    specialties: ["vegetables", "fruits"],
    rating: 4.8,
    isVerified: true
  },
  {
    name: "Organic Harvest Ltd.",
    email: "info@organicharvest.com",
    phone: "+1-555-0456",
    address: {
      street: "456 Organic Lane",
      city: "Farmington",
      state: "NY",
      country: "USA",
      zipCode: "12345"
    },
    specialties: ["vegetables", "herbs"],
    rating: 4.9,
    isVerified: true
  },
  {
    name: "Herb Garden Suppliers",
    email: "sales@herbgarden.com",
    phone: "+1-555-0789",
    address: {
      street: "789 Herb Street",
      city: "Spiceland",
      state: "IN",
      country: "USA",
      zipCode: "54321"
    },
    specialties: ["herbs"],
    rating: 4.7,
    isVerified: true
  }
];

// Sample products data (will be populated with supplier IDs after suppliers are created)
const getProductsData = (supplierIds) => [
  {
    name: "Premium Organic Tomatoes",
    description: "Fresh, vine-ripened organic tomatoes perfect for cooking and salads",
    category: "vegetables",
    price: 12.99,
    unit: "kg",
    image: "https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.5,
    stock: 100,
    supplier: supplierIds[0],
    discount: 15,
    reviews: [
      {
        user: "John Doe",
        comment: "Excellent quality tomatoes!",
        rating: 5
      }
    ]
  },
  {
    name: "Fresh Green Lettuce",
    description: "Crisp and fresh green lettuce leaves, perfect for salads",
    category: "vegetables",
    price: 8.50,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=600&h=400&fit=crop&crop=center",
    rating: 4.2,
    stock: 75,
    supplier: supplierIds[0]
  },
  {
    name: "Organic Carrots Bundle",
    description: "Sweet and crunchy organic carrots, great for cooking and snacking",
    category: "vegetables",
    price: 6.75,
    unit: "kg",
    image: "https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.8,
    stock: 120,
    supplier: supplierIds[0],
    discount: 10
  },
  {
    name: "Crispy Iceberg Lettuce",
    description: "Fresh and crispy iceberg lettuce heads, perfect for wraps and salads",
    category: "vegetables",
    price: 6.75,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=600&h=400&fit=crop&crop=center",
    rating: 4.6,
    stock: 85,
    supplier: supplierIds[1],
    discount: 10
  },
  {
    name: "Fresh Bell Peppers Mix",
    description: "Colorful mix of fresh bell peppers - red, yellow, and green",
    category: "vegetables",
    price: 15.20,
    unit: "kg",
    image: "https://images.pexels.com/photos/594137/pexels-photo-594137.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.4,
    stock: 60,
    supplier: supplierIds[1]
  },
  {
    name: "Organic Basil Herbs",
    description: "Fresh organic basil leaves with intense flavor and aroma",
    category: "herbs",
    price: 3.75,
    unit: "g",
    image: "https://images.pexels.com/photos/4198105/pexels-photo-4198105.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.9,
    stock: 200,
    supplier: supplierIds[2]
  },
  {
    name: "Fresh Rosemary Sprigs",
    description: "Aromatic fresh rosemary sprigs perfect for cooking and seasoning",
    category: "herbs",
    price: 5.25,
    unit: "g",
    image: "https://images.pexels.com/photos/4198017/pexels-photo-4198017.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.3,
    stock: 150,
    supplier: supplierIds[2],
    discount: 5
  },
  {
    name: "Sweet Red Apples",
    description: "Crisp and sweet red apples, perfect for snacking and baking",
    category: "fruits",
    price: 11.50,
    unit: "kg",
    image: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.7,
    stock: 90,
    supplier: supplierIds[0]
  }
];

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/supplyai_db');
    console.log('Connected to MongoDB');

    // Clear existing data
    await Product.deleteMany({});
    await Supplier.deleteMany({});
    console.log('Cleared existing data');

    // Create suppliers
    const createdSuppliers = await Supplier.insertMany(suppliers);
    console.log(`Created ${createdSuppliers.length} suppliers`);

    // Get supplier IDs
    const supplierIds = createdSuppliers.map(supplier => supplier._id);

    // Create products with supplier references
    const productsData = getProductsData(supplierIds);
    const createdProducts = await Product.insertMany(productsData);
    console.log(`Created ${createdProducts.length} products`);

    console.log('Database seeded successfully!');
    console.log('\nSample API calls:');
    console.log('GET /api/products - Get all products');
    console.log('GET /api/products?category=vegetables - Get vegetables');
    console.log('GET /api/products?search=tomato - Search for tomatoes');
    console.log('POST /api/cart/{sessionId}/items - Add item to cart');
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

// Run the seed function
seedDatabase();
