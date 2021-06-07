const express = require('express');
const router = express.Router();
const productsModel = require('../db/products')



router.get("/:id", async (req,res) => {
  console.log(req.params);
  const {id} = req.params
  const product = await productsModel.findById(id)
  res.json(product)
  console.log(product);
})



module.exports = router
