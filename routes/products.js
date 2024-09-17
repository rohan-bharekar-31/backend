const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// Route to get product by name (case-insensitive)
router.get('/:name', async (req, res) => {
  try {
    const product = await Product.findOne({
      name: { $regex: new RegExp(req.params.name, 'i') } // Case-insensitive search
    });
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// Add a product (dummy data)
router.post('/', async (req, res) => {
  const product = new Product({
    name: req.body.name,
    water_footprint: req.body.water_footprint,
  });

  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


// Route to get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;


module.exports = router;
