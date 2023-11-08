const mongoose = require('mongoose');
let uri = `mongodb+srv://nithish-shettigar:kittu214@cluster0.cmuceat.mongodb.net/GOFOOD?retryWrites=true&w=majority`;

const mongodb = async () => {
  mongoose.connect(uri, { useNewUrlParser: true }, async (err) => {
    if (err) console.log("---", err);
    else {
      console.log("Connected");
      const fetchdata = await mongoose.connection.db.collection("fooditems");
      fetchdata.find({}).toArray(async function (err, data) {
        
        const foodCategory = await mongoose.connection.db.collection("foodCategory");
        foodCategory.find({}).toArray(function (err, catdata) {
          if (err) console.log(err);
          else {
            global.fooditems = data;
            global.foodCategory = catdata;

          }
        })
      }
      )
    }
  })
}

module.exports = mongodb;