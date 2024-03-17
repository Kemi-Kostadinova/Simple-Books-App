const express = require("express");

const app = express();
const port = 5000;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");

    next();
});

app.get("/", (req, res) => {
    res.json({
        message: "Hello"
    })
})

app.listen(port, () => console.log(`Server is listening on http://localhost:${port}`))