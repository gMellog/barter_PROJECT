const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");
const productsModel = require("./products");
const categoriesModel = require("./categories");
const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
  poolSize: 10,
  bufferMaxEntries: 0,
};

const dbConnectionURL =
  "mongodb+srv://Alex:9Y780UY8XZZnVM0L@cluster0.fmjcz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

function dbConnect() {
  mongoose.connect(dbConnectionURL, options, (err) => {
    if (err) return console.log(err);
    console.log("Success connected to mongo");
  });
}

dbConnect();

async function productsFabric() {
  const categories = await categoriesModel.find();
  const id1 = categories[0]._id;
  const id2 = categories[1]._id;
  const id3 = categories[2]._id;
  const id4 = categories[3]._id;

  const products = [
    {
      name: "Корзина соломенная",
      photoUrl:["https://i.pinimg.com/564x/f7/ed/0a/f7ed0aba7ce29bbc9a039978388d5eb2.jpg"],
      address: "Moscow",
      infoOwner: uuidv4(),
      exchange: "Обувь",
      description: "Корзина для пикника соломенная",
      actual: true,
      createdAt: Date.now(),
      categories: id1,
    },
    {
      name: "Стул лофт",
      photoUrl:
        ["https://i.pinimg.com/564x/d0/f8/b1/d0f8b19a4908c0730720fd7bc84b0f21.jpg"],
      address: "Moscow",
      infoOwner: uuidv4(),
      exchange: "Стол",
      description: "Стул лофт",
      actual: true,
      createdAt: Date.now(),
      categories: id1,
    },
    {
      name: "product_3",
      photoUrl:
        ["https://delaidengi.boltai.com/wp-content/uploads/sites/28/2016/07/JETvGD9PHlgypwzPQAq5yQ1.jpg"],
  bufferMaxEntries: 0
}

const dbConnectionURL = "mongodb+srv://Alex:9Y780UY8XZZnVM0L@cluster0.fmjcz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

function dbConnect() {
  mongoose.connect(dbConnectionURL, options, (err) => {
    if (err) return console.log(err)
    console.log('Success connected to mongo')
  })
}

dbConnect()

function productsFabric() {
  const products = [
    {
      name: "product_1",
      photoUrl: "https://delaidengi.boltai.com/wp-content/uploads/sites/28/2016/07/JETvGD9PHlgypwzPQAq5yQ1.jpg",
      address: "Moscow",
      infoOwner: uuidv4(),
      exchange: "product_2",
      description: "cool product_1",
      actual: true
    },
    {
      name: "product_2",
      photoUrl: "https://delaidengi.boltai.com/wp-content/uploads/sites/28/2016/07/JETvGD9PHlgypwzPQAq5yQ1.jpg",
      address: "Moscow",
      infoOwner: uuidv4(),
      exchange: "product_3",
      description: "cool product_2",
      actual: true
    },
    {
      name: "product_3",
      photoUrl: "https://delaidengi.boltai.com/wp-content/uploads/sites/28/2016/07/JETvGD9PHlgypwzPQAq5yQ1.jpg",
      address: "Moscow",
      infoOwner: uuidv4(),
      exchange: "product_4",
      description: "cool product_3",
      actual: true,
      createdAt: Date.now(),
      categories: id1,
    },
    {
      name: "product_4",
      photoUrl: "https://delaidengi.boltai.com/wp-content/uploads/sites/28/2016/07/JETvGD9PHlgypwzPQAq5yQ1.jpg",
      address: "Moscow",
      infoOwner: uuidv4(),
      exchange: "product_5",
      description: "cool product_4",
      actual: true,
      createdAt: Date.now(),
      categories: id1,
    },
    {
      name: "product_5",
      photoUrl: "https://delaidengi.boltai.com/wp-content/uploads/sites/28/2016/07/JETvGD9PHlgypwzPQAq5yQ1.jpg",
      address: "Moscow",
      infoOwner: uuidv4(),
      exchange: "product_6",
      description: "cool product_5",
      actual: true,
      createdAt: Date.now(),
      categories: id2,
    },
    {
      name: "product_6",
      photoUrl: "https://delaidengi.boltai.com/wp-content/uploads/sites/28/2016/07/JETvGD9PHlgypwzPQAq5yQ1.jpg",
      address: "Moscow",
      infoOwner: uuidv4(),
      exchange: "product_7",
      description: "cool product_6",
      actual: true,
      createdAt: Date.now(),
      categories: id2,
    },
    {
      name: "product_7",
      photoUrl: "https://delaidengi.boltai.com/wp-content/uploads/sites/28/2016/07/JETvGD9PHlgypwzPQAq5yQ1.jpg",
      address: "Moscow",
      infoOwner: uuidv4(),
      exchange: "product_8",
      description: "cool product_7",
      actual: true,
      createdAt: Date.now(),
      categories: id2,
    },
    {
      name: "product_8",
      photoUrl: "https://delaidengi.boltai.com/wp-content/uploads/sites/28/2016/07/JETvGD9PHlgypwzPQAq5yQ1.jpg",
      address: "Moscow",
      infoOwner: uuidv4(),
      exchange: "product_9",
      description: "cool product_8",
      actual: true,
      createdAt: Date.now(),
      categories: id3,
    },
    {
      name: "product_9",
      photoUrl: "https://delaidengi.boltai.com/wp-content/uploads/sites/28/2016/07/JETvGD9PHlgypwzPQAq5yQ1.jpg",
      address: "Moscow",
      infoOwner: uuidv4(),
      exchange: "product_10",
      description: "cool product_9",
      actual: true,
      createdAt: Date.now(),
      categories: id3,
    },
    {
      name: "product_10",
      photoUrl: "https://delaidengi.boltai.com/wp-content/uploads/sites/28/2016/07/JETvGD9PHlgypwzPQAq5yQ1.jpg",
      address: "Moscow",
      infoOwner: uuidv4(),
      exchange: "product_11",
      description: "cool product_10",
      actual: true,
      createdAt: Date.now(),
      categories: id4,
    },
    {
      name: "product_11",
      photoUrl: "https://delaidengi.boltai.com/wp-content/uploads/sites/28/2016/07/JETvGD9PHlgypwzPQAq5yQ1.jpg",
      address: "Moscow",
      infoOwner: uuidv4(),
      exchange: "product_12",
      description: "cool product_11",
      actual: true,
      createdAt: Date.now(),
      categories: id4,
    },
    {
      name: "product_12",
      photoUrl: "https://delaidengi.boltai.com/wp-content/uploads/sites/28/2016/07/JETvGD9PHlgypwzPQAq5yQ1.jpg",
      address: "Moscow",
      infoOwner: uuidv4(),
      exchange: "product_13",
      description: "cool product_12",
      actual: true,
      createdAt: Date.now(),
      categories: id4,
    },
  ];
  return Promise.all(products.map((data) => productsModel.create(data)));
}

async function main() {
  await productsFabric();
}
main().then(() => console.log("its work+"));

module.exports = { productsFabric };

