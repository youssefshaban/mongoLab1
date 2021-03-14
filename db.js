const mongo = require('mongodb').MongoClient;


mongo.connect('mongodb://localhost:27017/', function (connectErr, client) {

  const db = client.db('test1');

  db.collection("rest").find().limit(100).toArray(function (err, result) {
    console.log("==================1=======================");
    console.log(result);
  })
  db.collection("rest").find({}, { projection: { restaurant_id: 1, "name": 1, "borough": 1, cuisine: 1 } }).limit(100).toArray(function (err, result) {
    console.log("===================2======================");
    console.log(result);
  })
  db.collection("rest").find({}, { projection: { restaurant_id: 1, "name": 1, "borough": 1, cuisine: 1, "_id": 0 } }).limit(100).toArray(function (err, result) {
    console.log("===================3======================");
    console.log(result);
  })
  db.collection("rest").find({}, { projection: { "restaurant_id": 1, "name": 1, "borough": 1, "address.zipcode": 1, "_id": 0 } }).limit(100).toArray(function (err, result) {
    console.log("====================4====================");
    console.log(result);
  })
  db.collection("rest").find({ "borough": "Bronx" }).limit(100).toArray((err, res) => {
    console.log("===================5======================");
    console.log(res)
  });
  db.collection("rest").find({ "borough": "Bronx" }).limit(5).toArray((err, res) => {
    console.log("===================6======================");
    console.log(res)
  });;
  db.collection("rest").find({ "borough": "Bronx" }).skip(5).limit(5).toArray((err, res) => {
    console.log("====================7=====================");
    console.log(res)
  });;
  db.collection("rest").find({ grades: { $elemMatch: { "score": { $gt: 90 } } } }).toArray((err, res) => {
    console.log("====================8=====================");
    console.log(res)
  });
  db.collection("rest").find({ grades: { $elemMatch: { "score": { $gt: 90, $lt: 100 } } } }).toArray((err, res) => {
    console.log("=====================9====================");
    console.log(res)
  });
  db.collection("rest").find({ "address.coord": { $lt: -95.754169 } }).toArray((err, res) => {
    console.log("=====================10====================");
    console.log(res)
  });
  db.collection("rest").find({ $and: [{ "cuisine": { $ne: "American" } }, { grades: { $elemMatch: { "score": { $gt: 90 } } } }, { "address.coord": { $lt: -65.754168 } }] }).toArray((err, res) => {
    console.log("======================11===================");
    console.log(res)
  });
  client.close();
});