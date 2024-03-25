const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const routes = require("./routes");
const { auth } = require("./middlewares/authMiddleware");

const app = express();
const port = 5000;

app.use(cookieParser());
app.use(auth);
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
  });
app.use(routes);


mongoose.connect("mongodb://localhost:27017/simple-app")
.then(() =>{
    console.log("DB is connected...");
    app.listen(port, () => console.log(`Server is listening on http://localhost:${port}`));

   })
   .catch(err => console.log(err.message));