const express = require("express");
const cors = require("cors");
const productsModel = require('./bd/products')
const { dbConnect, dbConnectionURL } = require("./bd/connect")


const app = express();
const PORT = 3001;
dbConnect()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/products", async (req,res) => {
  let products = await productsModel.find();
  res.json(products)
})

app.post("/search", async (req,res) => {
  console.log("===>1",req.body);
  const {name} = req.body
  let products = await productsModel.find({name: name});
  console.log(products);
  res.json(products)
})

app.listen(PORT, () => {
  console.log("Server on port ", PORT);
});
