const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");
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

function categoriesFabric() {
  const categories = [
    {
      name: "Техника",
    },
    {
      name: "Одежда",
    },
    {
      name: "Транспорт",
    },
    {
      name: "Животные",
    },
  ];
  return Promise.all(categories.map((data) => categoriesModel.create(data)));
}

async function main() {
  await categoriesFabric();
}
main().then(() => console.log("its work+"));

module.exports = { categoriesFabric };
