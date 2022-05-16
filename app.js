const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const request = require("request");
const res = require('express/lib/response');


app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.get('/', (req, res) => res.sendFile(__dirname + "/signup.html"))
// app.listen(port, () => console.log(`Example app listening on port ${port}!`))
app.post("/", function(req, res) {
    let firstName = req.body.floatingName;
    let secondName = req.body.floatingSecondName;
    let email = req.body.floatingInput;
    console.log (firstName,secondName,email);
})


app.listen(3000, function() {
    console.log("Server is running on port 3000.");
})
