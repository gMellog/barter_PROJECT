const express = require("express");
const cors = require("cors");
const uuid = require("uuid");

const app = express();
const PORT = 3001;

let products = [
  {
    id: uuid.v4(),
    name: "product_1",
    photoUrl: "https://delaidengi.boltai.com/wp-content/uploads/sites/28/2016/07/JETvGD9PHlgypwzPQAq5yQ1.jpg",
    address: "Moscow",
    infoOwner: uuid.v4(),
    exchange: "product_2",
    description: "cool product",
    actual: true
  }
];

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/products", (req,res) => {
  res.json(products)
})


app.listen(PORT, () => {
  console.log("Server on port ", PORT);
});
