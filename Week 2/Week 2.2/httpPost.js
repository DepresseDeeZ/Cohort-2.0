const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const  bp = require("body-parser");

//using express json and urlencoded
// // Middleware to parse JSON bodies
// app.use(express.json());

// // Middleware to parse URL-encoded bodies (for form data)
// app.use(express.urlencoded({ extended: true }));
// or

//using body-parser
app.use(bp.json());

app.post("/conversation", (req, res) => {
    console.log(req.body);
    res.send("Hello postman");
});

app.get('/', (req, res) => {
    res.send("Hello world");
});

app.listen(port, () => {
    console.log("Server is running");
    console.log(`http://localhost:${port}`);
});
