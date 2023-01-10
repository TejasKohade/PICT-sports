const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const Sports = require("./routes/Sports");
// const productRoute = require("./routes/product");
// const orderRoute = require("./routes/orders");



dotenv.config();

try {
  mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }, () => {
    console.log("Connected to mongoDB");
  });
} catch (err) {
  console.log(err);
}



app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/sports", Sports);


app.listen(process.env.PORT || 5000, () => {
    console.log("Backend is running!");
  });
  