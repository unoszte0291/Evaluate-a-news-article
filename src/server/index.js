projectData = {};
const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const http = require('http');

const express = require('express')
const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());
app.use(express.static('dist'))

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

const fetch = require('node-fetch');
const mockAPIResponse = require('./mockAPI.js')
const apiKey = process.env.API_KEY;
const baseurl = "https://api.meaningcloud.com/sentiment-2.1?key=";

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.post("/news", async(req, res) => {
    const postapi = await fetch(`${baseurl}${apiKey}&lang=auto&url=${req.body.formname}`, {
        method: 'POST'
    });

    try {
        const data = await postapi.json();
        console.log('postapi ++++>', data)
        res.send(data);
    } catch (err) {
        console.log("error", err);
    }
})
