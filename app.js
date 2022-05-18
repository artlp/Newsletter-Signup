const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const request = require("request");
// const res = require('express/lib/response');
const https = require("https");

const apiKey = "136313fbe7e1d66dd095b5caa0850889-us13"
const listId = "29b9dc9f11";

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => res.sendFile(__dirname + "/signup.html"))
// app.listen(port, () => console.log(`Example app listening on port ${port}!`))
app.post("/", function (req, res) {
    let firstName = req.body.floatingName;
    let secondName = req.body.floatingSecondName;
    let email = req.body.floatingInput;

    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: secondName
                }
            }
        ]
    }

    let jsonData = JSON.stringify(data);

    // console.log(jsonData);

    // const url = "https://us13.api.mailchimp.com/3.0/lists/" + listId;

    let options = {
        url: "https://us13.api.mailchimp.com/3.0/lists/" + listId,
        method: "POST",
        headers: {
            "Authorization": "artlp " + apiKey,
        },
        body: jsonData
    }

    request(options, function(error, response, body){
        if(error){
            res.sendFile(__dirname + "/failure.html");
        } else {
            console.log(response.statusCode);
                if(response.statusCode === 200){
                    res.sendFile(__dirname + "/success.html");
                } else {
                    res.sendFile(__dirname + "/failure.html");
                }
        }
    })
})

app.post("/failure", function(req, res){
    res.redirect("/");
})


app.listen(3000, function () {
    console.log("Server is running on port 3000.");
})

// unisender api 619kd66drkh9jk1nrchs7sxute65d5mecxbrd78e
// list id 749