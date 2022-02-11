const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgon = require("morgan");
const twilio = require('twilio'); 



mongoose.connect('mongodb+srv://local:1234@eclassroom-zhtyk.mongodb.net/nari?retryWrites=true&w=majority',{useNewUrlParser:true, useUnifiedTopology: true,})
    .then(()=>console.log('mongoDB connected...'))
    .catch(()=>console.log('error')); 

const app = express();
app.use(express.json()); 
app.use(cookieParser());
app.use(morgon())
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
  }));

// Routes
app.use("/users", require("./routes/users")); 
app.use("/info", require("./routes/info")); 

//twilio requirements -- Texting API 
const accountSid = 'ACe72bb88c9ab9d070edc177f318563183';
const authToken = 'a1e3d5290ce31aef6aa5c5312341d5fa';

const client = new twilio(accountSid, authToken);

const app = express(); //alias

app.use(cors()); //Blocks browser from restricting any data

//Welcome Page for the Server 
app.get('/', (req, res) => {
    res.send('Welcome to the Express Server')
})


//Twilio 
app.get('/send-text', (req, res) => {
    //Welcome Message
    

    //_GET Variables
    const { recipient, textmessage } = req.query;
    res.send('Hello to the Twilio Server ' + recipient )


    //Send Text
    client.messages.create({
        body: textmessage,
        to: '+916376797207',  // Text this number
        from: '+12563986327' // From a valid Twilio number
    }).then((message) => console.log(message.body));
})

app.listen(4000, () => console.log("Running on Port 4000"))