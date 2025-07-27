const express = require('express');
const { Cart, Product } = require('../models');
const router = express.Router();

// Get cart by session ID
router.get('/:sessionId', async (req, res) => {
  try {
    const cart = await Cart
      .findOne({ sessionId: req.params.sessionId })
      .populate({
        path: 'items.product',
        select: 'name price image category'
      });

    if (!cart) {
      return res.json({
        success: true,
        data: {
          sessionId: req.params.sessionId,
          items: [],
          totalAmount: 0,
          totalItems: 0
        }
      });
    }

    res.json({
      success: true,
      data: cart
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching cart',
      error: error.message
    });
  }
});

// Add item to cart
router.post('/:sessionId/items', async (req, res) => {
  try {
    const { productId, weight } = req.body;
    const { sessionId } = req.params;

    // Find the product
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      });
    }

    // Calculate total price
    const totalPrice = product.price * weight;

    // Find or create cart
    let cart = await Cart.findOne({ sessionId });
    
    if (!cart) {
      cart = new Cart({
        sessionId,
        items: [],
        totalAmount: 0,
        totalItems: 0
      });
    }

    // Check if item already exists in cart
    const existingItemIndex = cart.items.findIndex(
      item => item.product.toString() === productId
    );

    if (existingItemIndex >= 0) {
      // Update existing item
      cart.items[existingItemIndex].weight += weight;
      cart.items[existingItemIndex].totalPrice = 
        cart.items[existingItemIndex].weight * product.price;
    } else {
      // Add new item
      cart.items.push({
        product: productId,
        quantity: 1,
        weight,
        totalPrice
      });
    }

    // Recalculate totals
    cart.totalAmount = cart.items.reduce((sum, item) => sum + item.totalPrice, 0);
    cart.totalItems = cart.items.reduce((sum, item) => sum + item.weight, 0);

    await cart.save();

    // Populate and return cart
    await cart.populate({
      path: 'items.product',
      select: 'name price image category'
    });

    res.status(201).json({
      success: true,
      message: 'Item added to cart successfully',
      data: cart
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error adding item to cart',
      error: error.message
    });
  }
});

// Update item in cart
router.put('/:sessionId/items/:productId', async (req, res) => {
  try {
    const { sessionId, productId } = req.params;
    const { weight } = req.body;

    const cart = await Cart.findOne({ sessionId });
    if (!cart) {
      return res.status(404).json({
        success: false,
        message: 'Cart not found'
      });
    }

    const itemIndex = cart.items.findIndex(
      item => item.product.toString() === productId
    );

    if (itemIndex === -1) {
      return res.status(404).json({
        success: false,
        message: 'Item not found in cart'
      });
    }

    // Get product price
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      });
    }

    // Update item
    cart.items[itemIndex].weight = weight;
    cart.items[itemIndex].totalPrice = weight * product.price;

    // Recalculate totals
    cart.totalAmount = cart.items.reduce((sum, item) => sum + item.totalPrice, 0);
    cart.totalItems = cart.items.reduce((sum, item) => sum + item.weight, 0);

    await cart.save();

    // Populate and return cart
    await cart.populate({
      path: 'items.product',
      select: 'name price image category'
    });

    res.json({
      success: true,
      message: 'Cart item updated successfully',
      data: cart
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error updating cart item',
      error: error.message
    });
  }
});

// Remove item from cart
router.delete('/:sessionId/items/:productId', async (req, res) => {
  try {
    const { sessionId, productId } = req.params;

    const cart = await Cart.findOne({ sessionId });
    if (!cart) {
      return res.status(404).json({
        success: false,
        message: 'Cart not found'
      });
    }

    // Remove item
    cart.items = cart.items.filter(
      item => item.product.toString() !== productId
    );

    // Recalculate totals
    cart.totalAmount = cart.items.reduce((sum, item) => sum + item.totalPrice, 0);
    cart.totalItems = cart.items.reduce((sum, item) => sum + item.weight, 0);

    await cart.save();

    // Populate and return cart
    await cart.populate({
      path: 'items.product',
      select: 'name price image category'
    });

    res.json({
      success: true,
      message: 'Item removed from cart successfully',
      data: cart
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error removing item from cart',
      error: error.message
    });
  }
});

// Clear cart
router.delete('/:sessionId', async (req, res) => {
  try {
    const { sessionId } = req.params;

    await Cart.findOneAndDelete({ sessionId });

    res.json({
      success: true,
      message: 'Cart cleared successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error clearing cart',
      error: error.message
    });
  }
});

module.exports = router;
