const mongoose = require('mongoose')
const Category = require('./categoryModel');
const options = {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
    poolSize: 10,
    bufferMaxEntries: 0
}

async function getCategoryType(category) {
    let strs = [category.name];
    let obj = category;
    while (obj.node !== null) {
        obj = await Category.deepPopulate(obj, 'node');
        obj.node && strs.push(obj.node.name);
        obj = obj.node;
    }

    return strs.reverse().join('/');
}


const dbConnectionURL = "mongodb+srv://Alex:9Y780UY8XZZnVM0L@cluster0.fmjcz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

function dbConnect() {
    mongoose.connect(dbConnectionURL, options, async (err) => {
        if (err) return console.log(err)
        
        await Category.remove({});

        const categories = [
            new Category({name: 'Транспорт'}),
            new Category({name: 'Недвижимость'}),
            new Category({name: 'Личные вещи'}),
            new Category({name: 'Для дома и дачи'}),
            new Category({name: 'Бытовая электроника'}),
            new Category({name: 'Хобби и отдых'}),
            new Category({name: 'Животные'})
        ];


        const furnitureAndInterior = new Category({name: 'Мебель и интерьер'});
        const basket = new Category({name: 'Корзинка'});

        categories[3].nodes.push(furnitureAndInterior._id);
        furnitureAndInterior.nodes.push(basket._id);

        await Promise.all(categories.map(category => category.save()));
        
        mongoose.disconnect();
    })
}

dbConnect();
