const express = require("express");
const cors = require("cors");
const productsModel = require('./bd/products')
const categoriesModel = require("./bd/categories");
const { dbConnect, dbConnectionURL } = require("./bd/connect")


const app = express();
const PORT = 3001;
dbConnect()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/products", async (req,res) => {
  let products = await productsModel.find().populate("categories");
  res.json(products)
})

app.post("/search", async (req,res) => {
  const {name} = req.body
  let products = await productsModel.find({name: name});
  res.json(products)
})

app.get("/:category", async (req,res) => {
  const {category} = req.params
  let categoryId = await categoriesModel.findOne({name: category})
  let products = await productsModel.find({categories: categoryId._id});
  res.json(products)
})

app.listen(PORT, () => {
  console.log("Server on port ", PORT);
});
