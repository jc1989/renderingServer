/*
*  Write a server that will respond with the appropriate JSON blob 
*  for the given rendering
*/
var express = require('express');
var app = express();
var albums = require('./abstractions/albums.js');
var circles = require('./abstractions/circles.js');
var movies = require('./abstractions/movies.js');
var nameTags = require('./abstractions/nameTags.js');
var poker = require('./abstractions/poker.js');
var rectangle = require('./abstractions/rectangle.js');
var restaurants = require('./abstractions/restaurants.js');
var students = require('./abstractions/students.js');
var surveys = require('./abstractions/surveys.js');
var tweets = require('./abstractions/tweets.js');


app.use(express.static(__dirname + '/public'));

// GET /api/albums
app.get("/api/albums", function(request, response) {
    console.log(albums);
    //response.json(albums);
    response.send(albums);
});

// GET /api/circles
app.get("/api/circles", function(request, response) {
    console.log(circles);
    response.send(circles);
});

// GET /api/movies
app.get("/api/movies", function(request, response) {
    console.log(movies);
    response.send(movies);
});

// GET /api/nametags
app.get("/api/nametags", function(request, response) {
    console.log(nameTags);
    response.send(nameTags);
});

// GET /api/poker
app.get("/api/poker", function(request, response) {
    console.log(poker);
    response.send(poker);
});

// GET /api/rectangle
app.get("/api/rectangle", function(request, response) {
    console.log(rectangle);
    response.send(rectangle);
});

// GET /api/restaurants
app.get("/api/restaurants", function(request, response) {
    console.log(restaurants);
    response.send(restaurants);
});

// GET /api/students
app.get("/api/students", function(request, response) {
    console.log(students);
    response.send(students);
});

// GET /api/surveys
app.get("/api/surveys", function(request, response) {
    console.log(surveys);
    response.send(surveys);
});

// GET /api/tweets
app.get("/api/tweets", function(request, response) {
    console.log(tweets);
    response.send(tweets);
});

app.listen(3000, function(){
    console.log('rendering-api is now listening on port 3000...');
})