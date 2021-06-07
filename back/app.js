const express = require("express");
const cors = require("cors");
const productsModel = require('./bd/products')
const multer  = require('multer')
const path  = require('path')
const { dbConnect, dbConnectionURL } = require("./bd/connect")


const app = express();
const PORT = 3001;
dbConnect()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Описание хранилища
const storage = multer.diskStorage({
  //Путь сохранения файла
  destination: "./public/avatar/",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});



const uploadOne = multer({
  storage: storage,
  limits: { fileSize: 10000000000 },
}).single("image"); // подргрузка одного или большого кол изображений
// }).single("image"); // подргрузка одного или большого кол изображений


// app.get('/photo/avatar', async (req, res) => {
//   const result = await File.find();
//   console.log(result);
//   res.json(result)
// })


app.post('/photo/avatar', (req, res) => {
  try {
    let imagePath = "abc";
    uploadOne(req, res, (err) => {
      if (err) {
        res.status(300).send(err);
        console.log(err);
      } else {
        if (req.file == undefined) {
          res.status(301).send("image upload failed.");
        } else {
          //image uploaded successfully
          imagePath = "dododo/" + req.file.filename;
          // storeImageLink(res, imagePath);
          res.status(200).json();
        }
      }
    });
  } catch (err) {
    console.log(err);
  }
})





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
