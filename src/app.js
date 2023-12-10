
const express = require('express');
const app = express()
const subscriber = require('./models/subscribers')

// Your code goes here


app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.set('view engine', 'ejs')



//Api to render index.ejs page
app.get('/', (req, res) => {
  res.render('index');
});


//Api to get all data 
app.get('/subscribers', (req, res) => {

  // finding all the subscribers data from schema
  subscriber.collection.find().toArray((err, items) => {
    if (err) {
      res.status(400).send({ message: err.message }) // JSON response with a status code of 404 (Not Found) and the error message
    }
    res.status(200).json(items) //Response data
  })

})


//Api to get all subscribers by name and subscribed channel 
app.get("/subscribers/names", async (req, res) => {
  try {
    const subscribers = await subscriber.find(
      {},
      { _id: 0, name: 1, subscribedChannel: 1 }
    );
    res.status(200).json(subscribers);      //Response data

  } catch (error) {
    res.status(404).json({ message: "Subscriber name not found." });// JSON response with a status code of 404 (Not Found) and the error message
  }
});


//Api to get subscribers by id 
app.get("/subscribers/:id", async (req, res) => {
  try {
    const id = req.params.id; // Extract ID from the request URL

    const subscribers = await subscriber.findById(id); // Find a subscriber data with given ID in the schema
    if (!subscribers) {
      res.status(404).json({ message: "Subscriber not found" }); //JSON response with a status code of 404 (Not Found)
    }
    res.status(200).json(subscribers); // Response data for the given id
  } catch (error) {
    res.status(400).json({ message: error.message }); // JSON response with a status code of 400 (Bad Request) and the error message
  }
});


module.exports = app;