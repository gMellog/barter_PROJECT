const express = require("express");
const { dbConnect } = require("./db/connect")
const productsModel = require('./db/products')
const cors = require("cors");
//Дла multer 
const multer = require('multer')
const path = require('path')
// const { dbConnect, dbConnectionURL } = require("./bd/connect")

const jwt = require('./jwt');
const morgan = require('morgan')
const http = require('http');
const socketIo = require('socket.io');
const User = require('./db/user');
const { Room } = require('./db/roomModel')
const Message = require('./db/messageModel');

const app = express();
const userRouter = require('./routers/userRouter');
const chatRouter = require('./routers/chatRouter');
const productRouter = require("./routers/productRouter");
const { env } = require("process");


const server = http.createServer(app);
const io = socketIo(server,
  {
    cors: {
      origin: '*'
    }
  }

);

app.use(morgan('dev'));
app.use(cors());
app.use(jwt());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
console.log(process.env.PWD)
app.use(express.static(path.join(process.env.PWD, 'public')));

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
//Товары  -------------------------------------------------------------------------------------------------

app.get('/products', async (req, res) => {
  const result = await productsModel.find()
  res.json(result)
})


//Multer---------------------------------------------------------------------------

const uploadOne = multer({
  storage: storage,
  limits: { fileSize: 10000000000 },
}).single("image"); // подргрузка одного или большого кол изображений


// app.get('/photo/avatar', async (req, res) => {
//   const result = await File.find();
//   console.log(result);
//   res.json(result)
// })



app.get('/user', async (req, res) => {
  console.log('555555');
  const result = await User.findById(req.user.id)
  res.json(result)
})


app.post('/photo/avatar', (req, res) => {
  try {
    console.log(req.user.id);
    let imagePath = "abc";
    uploadOne(req, res, (err) => {
      if (err) {
        res.status(300).send(err);
        console.log(err);
      } else {
        if (req.file == undefined) {
          res.status(301).send("image upload failed.");
        } else {

          User.findById(req.user.id)
          .then(r => {
            r.avatar = '/avatar/' + req.file.filename;
            r.save().then(()=> res.status(200).json())
          })
          
        }
      }
    });
  } catch (err) {
    console.log(err);
  }
})


//ЧАТ---------------------------------------------------------------------------

app.use('/user', userRouter);
app.use('/chat', chatRouter);
app.use("/product", productRouter)


io.on('connect', socket => {
  socket.on('join', async ({ id, roomID }, callback) => {

    const user = await User.findById(id);
    user.socketID = socket.id;
    user.roomID = roomID;
    await user.save();

    console.log('heyy123');

    socket.join(roomID);

    const roomDB = await Room.findOne({ roomID }).populate('messages');
    if (!roomDB) { console.log('cant find room'); return; }

    socket.emit('init messages', roomDB.messages.map(message => message.toJSON()));
  })


  socket.on('sendMessage', async (message, callback) => {

    try {
      const user = await User.findOne({ socketID: socket.id });
      const room = await Room.findOne({ roomID: user.roomID });
      const messageDB = new Message({ ownerName: user.name, message });
      await messageDB.save();
      room.messages = [...room.messages, messageDB._id];
      await room.save();
      io.to(user.roomID).emit('message', { ownerName: user.name, message });
    }
    catch (err) {
      console.log(err.message);
    }

    callback();
  });

  socket.on('disconnect', async () => {

    console.log('disconnect!!!!!');

    const user = await User.findOne({ socketID: socket.id });
    if (user) {
      user.socketID = null
      user.roomID = null;
      await user.save();
    }
    else {
      console.log('Cant disconnect empty user');
    }
  })
})


app.get("/products", async (req,res) => {
  let products = await productsModel.find().populate("categories");
  res.json(products)
})

app.post("/search", async (req,res) => {
  const {name} = req.body
  let products = await productsModel.find({name: name});
  res.json(products)
})
app.post("/deal", (req,res) => {
  console.log(req.body);
})

app.get("/:category", async (req,res) => {
  const {category} = req.params
  let categoryId = await categoriesModel.findOne({name: category})
  let products = await productsModel.find({categories: categoryId._id});
  res.json(products)
})

const PORT = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;

server.listen(PORT, () => {
  dbConnect()
  console.log("Server on port ", PORT);
});
