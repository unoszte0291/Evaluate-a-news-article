# Project Instructions

This repo is the project in Udaciy Nanodegree.

The goal of this project is to give a proctice with:
- Setting up Webpack
- Webpack Loaders and Plugins
- Using APIs and creating requests to external urls
- Creating layouts and page design
- Service workers


On top of that, I want to introduce you to the topic of Natural Language Processing. NLPs leverage machine learning and deep learning create a program that can interpret natural human speech. Systems like Alexa, Google Assistant, and many voice interaction programs are well known to us, but understanding human speech is an incredibly difficult task and requires a lot of resources to achieve. Full disclosure, this is the Wikipedia definition, but I found it to be a clear one:

> Natural language processing (NLP) is a subfield of computer science, information engineering, and artificial intelligence
concerned with the interactions between computers and human (natural) languages, in particular how to program computers to
process and analyze large amounts of natural language data.

You could spend years and get a masters degree focusing on the details of creating NLP systems and algorithms. Typically, NLP programs require far more resources than individuals have access to, but a fairly new API called Aylien has put a public facing API in front of their NLP system. We will use it in this project to determine various attributes of an article or blog post.

## Getting started

Remember that once you clone, you will still need to install everything:

`cd` into your new folder and run:
- `npm install`

## Webpack Loaders and Plugins
Installed express, corse, bodyparser, and webpack with all necessary loaders and plugins.
```
{
  "name": "evaluate-news-project",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "jest",
    "start": "node src/server/index.js",
    "build-prod": "webpack --config webpack.prod.js",
    "build-dev": "webpack-dev-server  --config webpack.dev.js --open",
    "build": "webpack"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "body-parser": "^1.19.0",
    "cors": "^2.8.5",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "webpack": "^4.35.3",
    "webpack-cli": "^3.3.5"
  },
  "devDependencies": {
    "@babel/core": "^7.5.4",
    "@babel/preset-env": "^7.5.4",
    "babel-loader": "^8.0.6",
    "clean-webpack-plugin": "^3.0.0",
    "css-loader": "^3.0.0",
    "html-webpack-plugin": "^3.2.0",
    "jest": "^26.6.3",
    "mini-css-extract-plugin": "^0.8.0",
    "node-fetch": "^2.6.1",
    "node-sass": "^4.12.0",
    "optimize-css-assets-webpack-plugin": "^5.0.3",
    "sass-loader": "^7.1.0",
    "set-default-browser": "^1.1.2",
    "style-loader": "^0.23.1",
    "terser-webpack-plugin": "^1.3.0",
    "webpack-dev-server": "^3.7.2",
    "workbox-webpack-plugin": "^6.1.1"
  }
}
```
## Setting up the API

The Aylien API is perhaps different than what you've used before. It has you install a node module to run certain commands through, it will simplify the requests we need to make from our node/express backend.

### Step 1: Signup for an API key
For the MeaningCloud API: You can find the API here. Once you create an account with MeaningCloud, you will be given a license key to start using the API. This API does not require an SDK, so you can skip ahead to step 4 in the instructions.

### Step 2: Environment Variables
Next we need to declare our API keys, which will look something like this:
```
// You could call it anything.
var textapi = new MeaningCloud({
  application_id: "your-api-id",
  application_key: "your-key"
});
```
...but there's a problem with this. We are about to put our personal API keys into a file, but when we push, this file is going to be available PUBLICLY on Github. Private keys, visible publicly are never a good thing. So, we have to figure out a way to make that not happen. The way we will do that is with environment variables. Environment variables are pretty much like normal variables in that they have a name and hold a value, but these variables only belong to your system and won't be visible when you push to a different environment like Github.

- [ ] Use npm or yarn to install the dotenv package ```npm install dotenv```. This will allow us to use environment variables we set in a new file
- [ ] Create a new ```.env``` file in the root of your project
- [ ] Go to your .gitignore file and add ```.env``` - this will make sure that we don't push our environment variables to Github! If you forget this step, all of the work we did to protect our API keys was pointless.
- [ ] Fill the .env file with your API keys like this:
```
API_KEY=**************************
```
- [ ] Add this code to the very top of your server/index.js file:
```
const dotenv = require('dotenv');
dotenv.config();
```
- [ ] Reference variables you created in the .env file by putting ```process.env``` in front of it, an example might look like this:
```
console.log(`Your API key is ${process.env.API_KEY}`);
```
...Not that you would want to do that. This means that our updated API credential settings will look like this:
```javascript
// set aylien API credentials
// NOTICE that textapi is the name I used, but it is arbitrary. 
// You could call it aylienapi, nlp, or anything else, 
//   just make sure to make that change universally!
var textapi = new MeaningCloud({
  application_key: process.env.API_KEY
});
```
## Creating layouts and page design
I made a webpage which is displayed the evaluatting result of a URL.<br
It is designed with SCSS language.<br

https://sass-lang.com/documentation<br>
https://developer.mozilla.org/en-US/docs/Learn/CSS<br

## Service workers
```
Three steps:
1. In webpack.prod.js config file,
・Require the plugin, by appending the new plugin statement
  const WorkboxPlugin = require('workbox-webpack-plugin');

・Instantiate the new plugin in the plugin list:
  new WorkboxPlugin.GenerateSW()

2. On the terminal, install the plugin using npm install workbox-webpack-plugin --save-dev

3. If you follow along with the Workbox Service Worker documentation, there’s one more step. We need to register a Service Worker with our app. To do this, we will add a script to our /src/client/views/index.html file and call the register service worker function if the browser supports service workers.

Add this code to the bottom of your html file, just above the closing body tag.

<script>
 // Check that service workers are supported
 if ('serviceWorker' in navigator) {
     // Use the window load event to keep the page load performant
     window.addEventListener('load', () => {
         navigator.serviceWorker.register('/service-worker.js');
     });
 }
</script>
```
## Deploying

A great step to take with your finished project would be to deploy it! Unfortunately its a bit out of scope for me to explain too much about how to do that here, but checkout [Netlify](https://www.netlify.com/) or [Heroku](https://www.heroku.com/) for some really intuitive free hosting options.
