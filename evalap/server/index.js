import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import postRoutes from "./routes/testlist.js";

const app = express();
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const CONNECTION_URL =
  "mongodb+srv://admin-user:miKKy2013@cluster0.qttto.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 3003;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`server running on port ${PORT} .....`));
  })
  .catch((error) => console.log(error));

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use("/list", postRoutes);

// mongoose.set("useFindAndModify", false);
