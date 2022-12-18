const mongoose = require("mongoose");

mongoose.connect( "mongodb+srv://sourabh:sourabh@cluster0.gpvkamp.mongodb.net/shareassignment?retryWrites=true&w=majority",{
  useNewUrlParser: true,
  useUnifiedTopology: true 
})
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })