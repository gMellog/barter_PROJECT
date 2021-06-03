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


app.listen(PORT, () => {
  console.log("Server on port ", PORT);
});
