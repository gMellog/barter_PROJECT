const express = require("express");
const router = express.Router();
const Product = require("../db/productModel");

router.get("/:id", async (req, res) => {
  console.log('PRODUCT ROUTER ID');
  console.log(req.params);
  try{
  const { id } = req.params;
  const product = await Product.findById(id);
  res.json(product);
  }
  catch(e)
  {
    console.log(e.message);
    res.status(400).json();
  }
});

router.get("/category/:id", async (req, res) => {
  const { id } = req.params;
  const products = await Product.find({ categories: id });
  console.log(products);
  res.json(products);
});

module.exports = router;
