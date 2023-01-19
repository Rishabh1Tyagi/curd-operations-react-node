const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.get("/text", (req, res) => {
  res.send("Hello World!");
});

// Where we will keep books
let movies = [];

app.use(cors());
app.options("*", cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Accept Authorization"
  );
  res.header("Access-Control-Expose-Headers", "*");
  next();
});

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// post api for movies
app.post("/movie", (req, res) => {
  try {
    const movie = req.body;
    console.log(movie);
    movies.push(book);
    res.status(200).json("Movie is added to the database");
  } catch (err) {
    res.status(404).send(`Movie is not Added Successfully ${err}`);
  }
});

// get api for movies
app.get("/movie/:name", (req, res) => {
  try {
    const name = req.params.name;
    // Searching books for the isbn
    for (let movie of movies) {
      if (movie.name === name) {
        res.json(book);
        return;
      }
    }
  } catch (err) {
    res.status(404).send(`Movie is not found ${err}`);
  }
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
