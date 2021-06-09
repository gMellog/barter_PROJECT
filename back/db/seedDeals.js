const mongoose = require('mongoose')
const Products = require('./products');
const Deal = require('./dealModel');
const options = {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
    poolSize: 10,
    bufferMaxEntries: 0
}

const dbConnectionURL = "mongodb+srv://Alex:9Y780UY8XZZnVM0L@cluster0.fmjcz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

function dbConnect() {
    mongoose.connect(dbConnectionURL, options, async (err) => {
        if (err) return console.log(err)

        //await Deal.deleteMany({});

        // const participant1 = { userID: '60bcf6ec14b8d3f4b48c8424', productID: "60bdca1b46ecfa308498a4df" };
        // const participant2 = { userID: '60bcd681eb26cec589869726', productID: "60bdca1b46ecfa308498a4e0" };
        // const participant3 = { userID: '60bc93ce6821c5867bc09875', productID: "60bdca1b46ecfa308498a4e1" };

        // const deal1 = new Deal({ participants: [participant1, participant2] });
        // const deal2 = new Deal({ participants: [participant2, participant3] });

        // await Promise.all([deal1.save(), deal2.save()]);
        mongoose.set('debug', true);

       // const deals = await Deal.find({ "participants": { $elemMatch: { userID: '60bcf6ec14b8d3f4b48c8424' } } });
       const deals = await Deal.find().elemMatch('participants', { userID: '60bcf6ec14b8d3f4b48c8424'}) 
       //.elemMatch('participants', {userID: mongoose.Types.ObjectId('60bcf6ec14b8d3f4b48c8424')});//.populate('productID').elemMatch('participants', { "productID.name": "Корзина соломенная"});//, { participants: { productID: { $elemMatch: { name: "Корзина" } } } });

        mongoose.disconnect();
        //.elemMatch('productID', { name: 'Корзина соломенная'});// { productID: { $elemMatch: { infoOwner: mongoose.Types.ObjectId('60bcd681eb26cec589869726') } } });

        // console.log(deals);
        //console.log(deals[0].participants);
        //console.log(deals[1].participants);

    })
}

dbConnect();
