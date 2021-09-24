const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  sale_price: {
    type: Number,
    required: false,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  count_serves: {
    type: String,
    required: true,
  },
  is_available: {
    type: Boolean,
    required: true,
    default: true,
  },
  is_on_sale: {
    type: Boolean,
    required: true,
    default: false,
  },
  image: [
    {
      type: String,
      required: false,
      trim: true,
    },
  ],
});

module.exports = mongoose.model('Product', schema);