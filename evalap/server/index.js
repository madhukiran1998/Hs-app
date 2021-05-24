import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import postRoutes from "./routes/testlist.js";

const app = express();
app.use( function ( req, res, next ) {
  res.header( "Access-Control-Allow-Origin", "*" ); // update to match the domain you will make the request from
  res.header( "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept" );
  next();
} );

const CONNECTION_URL =
  // "mongodb+srv://mk:uSezi81jewH22uuB@cluster0.qttto.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
"mongodb+srv://mk:uSezi81jewH22uuB@cluster0.vhxxu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

  const PORT = process.env.PORT || 3003;

mongoose
  .connect( CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }, () => {
    console.log( "db connected" );
  } );

// mongoose.set( "useFindAndModify", false );

app.use( bodyParser.json( { limit: "30mb", extended: true } ) );

// app.use(bodyParser.json())
app.use( bodyParser.urlencoded( { limit: "30mb", extended: true } ) );

// app.use((req,res, next)=>{
//   console.log("body",req.body)
//   console.log("params",req.params)
//   next()
// })

app.get("/",(req,res)=>{
  console.log(req.body)
  res.json("All systems go")
})

app.use( "/list", postRoutes );


app.listen( PORT, () => console.log( `server running on port ${PORT} .....` ) );
