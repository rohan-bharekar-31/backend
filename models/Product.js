const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  water_footprint: {
    type: Number,
    required: true
  },
  unit: {
    type: String,
    default: 'liters/kg'
  }
});

module.exports = mongoose.model('Product', ProductSchema);
