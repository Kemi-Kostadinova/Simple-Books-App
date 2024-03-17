const express = require("express");

const routes = require("./routes");

const app = express();
const port = 5000;

app.use(express.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");

    next();
});
app.use(routes);

app.listen(port, () => console.log(`Server is listening on http://localhost:${port}`))