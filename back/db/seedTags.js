const mongoose = require("mongoose");
const Tag = require("./tagModel");
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
  mongoose.connect(dbConnectionURL, options, async (err) => {
    if (err) return console.log(err);

    await Tag.deleteMany({});

    const titles = [
      "Клавиатура",
      "Книга",
      "Шапка",
      "Кепка",
      "Кроссовки",
      "Ботинки",
      "Туфли",
      "Шорты",
      "Рубашка",
      "Джинсы",
      "Брюки",
      "Куртка",
      "Ручка",
      "Стол",
      "Очки",
      "Айфон",
      "Велосипед",
      "Стул",
      "Сумка",
      "Кровать",
      "Диван",
      "Рюкзак",
      "Платье",
      "Часы",
      "Кресло",
      "Самокат",
      "Мопед",
      "Люстра",
      "X-box",
      "Ноутбук",
      "Наушники",
      "Клавиатура",
      "Мышь",
      "Монитор",
      "Шляпа",
      "Зонт",
      "Доска",
      "Проектор",
      "Стакан",
      "Тетрадь",
      "Шахматы",
      "Лего",
      "Конструктор",
      "Игрушка",
    ];
    const tags = titles.map((title) => new Tag({ name: title }));

    await Promise.all(tags.map((tag) => tag.save()));
    mongoose.disconnect();
  });
}

dbConnect();
