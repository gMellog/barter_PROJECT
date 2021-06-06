const express = require("express");
const { dbConnect } = require("./db/connect")
const productsModel = require('./db/products')
const cors = require("cors");
const jwt = require('./jwt');
const morgan = require('morgan')
const http = require('http');
const socketIo = require('socket.io');
const chatSetup = require('./chatSetup');

const app = express();
const userRouter = require('./routers/userRouter');

const server = http.createServer(app);
const io = socketIo(server);
chatSetup(io);


app.use(morgan('dev'));
app.use(cors());
app.use(jwt());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user', userRouter);

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

const PORT = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;

app.listen(PORT, () => {
  dbConnect()
  console.log("Server on port ", PORT);
});
