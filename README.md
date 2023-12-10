# **AlmaBetter Backend Project**

## (**GET-YOUTUBE-SUBSCRIBERS**)

> This is a backend Application that provides APIs for mananing YouTube Subscribers data. This application is developed with Node.Js and express and MongoDB is used as a database to manage subscribers data in database. 


### APIs

- "/" : This default route will render "index.html" file.
- "/subscribers" : This will respond with an array of subscribers.
- "/subscribers/names" : This will respond with an array of subscribers with only two fields, name and subscribed channel.
- "/subscribers/:id : This will response with the details of subscriber whose id is provided.


### Prerequisites (Installation)
- VSCode  (https://code.visualstudio.com/download)
- Node.Js (https://nodejs.org/en)
- MongoDB (https://www.mongodb.com/try/download/shell)


### Dependencies
- Node.js
- express
- mongoose
- nodemon
- MongoDb

### Run
Git commands: 
```
git clone https://github.com/nidhisahani/Get-Youtube-Subscribers-main.git
npm istall
cd src
node createDatabase.js
nodemon index.js
```

### Project created by
> Nidhi Sahani

### Thank You