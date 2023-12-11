
const express = require('express');
const app = express()
const subscriber = require('./models/subscribers')
const path =require('path')

// Your code goes here


app.use(express.json())
app.use(express.urlencoded({ extended: false }))



//Api to render index.html page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});


//Api to get all data 
app.get("/subscribers", async (req, res, next) => {
  try {
    let subscribers = await subscriber.find(); // Retrieve all subscribers from the schema/model
    res.status(200).json(subscribers); // Send the subscribers as a JSON response with a status of 200 (OK)
  } catch (err) {
    res.status(400); // Set the response status to 400 (Bad Request)
    next(err); // Pass the error to the error handling middleware
  }
});


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
app.get("/subscribers/:id", async (req, res,next) => {
  try{
    const id = req.params.id; // Extract ID from the request URL

    const subscribers = await subscriber.findById(id); // Find a subscriber data with given ID in the schema
    
    if(!subscribers){
      res.status(400).json({ message: "Data not found" }); // JSON response with a status code of 400 (Bad Request) and the error message
    }else{
      res.status(200).json(subscribers); // Response data for the given id

    }

  }
  catch(error){
    next(error)
  }
  
    
  
});


module.exports = app;
