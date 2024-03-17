const express = require("express");
const mongoose = require("mongoose");

const routes = require("./routes");

const app = express();
const port = 5000;

app.use(express.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");

    next();
});
app.use(routes);

mongoose.connect("mongodb://localhost:27017/simple-app")
.then(() =>{
    console.log("DB is connected...");
    app.listen(port, () => console.log(`Server is listening on http://localhost:${port}`));

   })
   .catch(err => console.log(err.message));