const express = require("express");
const { dbConnect } = require("./db/connect")
const productsModel = require('./db/products')
const cors = require("cors");
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


const server = http.createServer(app);
const io = socketIo(server,
    {
      cors: {
        origin: '*'
      }
    }

  );

app.use((req,res,next) => {
  console.log('helloo123');
  next();
})
app.use(morgan('dev'));
app.use(cors());
app.use(jwt());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user', userRouter);
app.use('/chat', chatRouter);

io.on('connect', socket => {
        socket.on('join', async ({ id, roomID }, callback) => {

            const user = await User.findById(id);
            user.socketID = socket.id;
            user.roomID = roomID;
            await user.save();

            console.log('heyy123');

            socket.join(roomID);

            const roomDB = await Room.findOne({roomID}).populate('messages');
            if (!roomDB) { console.log('cant find room'); return; }

            socket.emit('init messages', roomDB.messages.map(message => message.toJSON()));
        })

        
          socket.on('sendMessage', async (message, callback) => {
           
            try{
            const user = await User.findOne({socketID: socket.id});
            const room = await Room.findOne({roomID: user.roomID});
            const messageDB = new Message({ownerName: user.name, message});
            await messageDB.save();
            room.messages = [...room.messages, messageDB._id];
            await room.save();
            io.to(user.roomID).emit('message', {ownerName: user.name, message });
            }
            catch(err)
            {
              console.log(err.message);
            }

            callback();
          });

        socket.on('disconnect', async () => {

          console.log('disconnect!!!!!');

             const user = await User.findOne({ socketID: socket.id });
             if(user)
             {
                user.socketID = null
                user.roomID = null;
                await user.save();
             }
             else 
             {
               console.log('Cant disconnect empty user');
             }
        })
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

const PORT = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;

server.listen(PORT, () => {
  dbConnect()
  console.log("Server on port ", PORT);
});
