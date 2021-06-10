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
  const transport = categories[0]._id;
  const electronics = categories[1]._id;
  const animals = categories[2]._id;
  const clothes = categories[3]._id;
  const furniture = categories[4]._id;
  const kitchenware = categories[5]._id;
  const another = categories[6]._id;
  const antiques = categories[7]._id;
  const gardening = categories[8]._id;
  const anything = categories[9]._id;



  const products = [
    {
      name: "Туфли женские",
      photoUrl:["https://i.pinimg.com/564x/f7/ed/0a/f7ed0aba7ce29bbc9a039978388d5eb2.jpg"],
      address: "Moscow",
      infoOwner: "60bcf6ec14b8d3f4b48c8424",
      exchange: "Телефон",
      description: "Туфли 39 размера",
      actual: true,
      createdAt: Date.now(),
      categories: clothes,
    },
    {
      name: "Стол обеденный",
      photoUrl:
        ["https://i.pinimg.com/564x/d0/f8/b1/d0f8b19a4908c0730720fd7bc84b0f21.jpg"],
      address: "Moscow",
      infoOwner: "60bc93ce6821c5867bc09875",
      exchange: "Кресло",
      description: "Стол круглый",
      actual: true,
      createdAt: Date.now(),
      categories: furniture,
    },
    {
      name: "Айфон",
        photoUrl:
          ["https://i.pinimg.com/564x/d0/f8/b1/d0f8b19a4908c0730720fd7bc84b0f21.jpg"],
        address: "Moscow",
        infoOwner: "60bcf6ec14b8d3f4b48c8424",
        exchange: "Кресло",
        description: "Айфон12 макс",
        actual: true,
        createdAt: Date.now(),
        categories: electronics,
  
    }]
  return Promise.all(products.map((data) => productsModel.create(data)));
}

async function main() {
  await productsFabric();
}
main().then(() => console.log("its work+"));

module.exports = { productsFabric };

