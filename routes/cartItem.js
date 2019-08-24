const router = require("express").Router();
let CartItem = require("../models/cartItems");

router.route("/").get((req, res) => {
  CartItem.find()
    .then(item => res.json(item))
    .catch(err => res.status(400).json("Err1" + err));
});

router.route("/add").post((req, res) => {
  const comicId = req.body.comicId;
  const count = req.body.count;

  const newCartItem = new CartItem({ comicId, count });

  newCartItem
    .save()
    .then(() => res.json("added to cart!"))
    .catch(err => res.status(400).json("Err2" + err));
});

router.route("/update/:id").post((req, res) => {
  CartItem.findOne({ comicId: req.params.id })
    .then(item => {
      item.count = req.body.count;
      item
        .save()
        .then(() => res.json("count update"))
        .catch(err => res.status(400).json("err" + err));
    })
    .catch(err => res.status(400).json("Err3" + err));
});

router.route("/:id").delete((req, res) => {
  CartItem.findOneAndDelete({ comicId: req.params.id })
    .then(() => res.json("item deleted"))
    .catch(err => res.json("err" + err));
});

module.exports = router;
