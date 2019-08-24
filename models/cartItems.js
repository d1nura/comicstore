const mongoose = require("mongoose");

const cartItems = new mongoose.Schema(
  {
    comicId: {
      type: Number,
      unique: true
    },
    count: {
      type: Number
    }
  },
  {
    timestamps: true
  }
);

const CartItem = mongoose.model("CartItem", cartItems);

module.exports = CartItem;
