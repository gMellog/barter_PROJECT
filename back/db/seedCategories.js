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
        
        await Category.deleteMany({});

        const categories = [
            new Category({name: 'Транспорт'}),
            new Category({name: 'Электроника'}),
            new Category({name: 'Животные'}),
            new Category({name: 'Одежда'}),
            new Category({name: 'Мебель'}),
            new Category({name: 'Кухонная утварь'}),
            new Category({name: 'Другое'}),
            new Category({name: 'Садоводство'}),
            new Category({name: 'Все что угодно'}),
            new Category({name: 'Антиквариат'})
        ];

        await Promise.all(categories.map(category => category.save()));        
        mongoose.disconnect();
    })
}

dbConnect();
