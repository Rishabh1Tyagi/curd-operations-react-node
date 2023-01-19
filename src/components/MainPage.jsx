import React from "react";
import { Typography, Card, CardContent } from "@material-ui/core";
// imprort movie json
import DataApi from "./Api.json";
import axios from "axios";

const MainPage = () => {
  const [apidata, setApiData] = React.useState("");

  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };

  React.useEffect(() => {
    fetch("http://localhost:8000/text")
      .then((res) => res.json())
      .then((data) => setApiData(data.message))
      .catch((err) => console.log(err, "err"));
    console.log(apidata, "data");
  }, []);

  return (
    <>
      <h1>{apidata}</h1>
      <Card
        style={{
          width: "50%",
          margin: "1rem",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {DataApi.movies.map((movie, index) => {
          return (
            <CardContent key={index}>
              <Card style={{ width: "100%" }}>
                <CardContent>
                  <Typography
                    style={{ textAlign: "center", fontWeight: "bold" }}
                  >
                    Movie Info
                  </Typography>
                  <Typography>
                    Movie Name: {movie.name}
                    <br />
                    Movie Rating: {movie.rating}
                    <br />
                    Movie Date: {movie.releaseDate}
                  </Typography>
                </CardContent>
              </Card>
            </CardContent>
          );
        })}
      </Card>
    </>
  );
};

export default MainPage;
