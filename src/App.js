import React, { useState, useEffect } from "react";
import './App.css';
import Axios from "axios";
import Search from "./components/Search/Search";

function App() {

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    Axios({
      url: "https://api.themoviedb.org/3/discover/movie?api_key=752c9fa4bc0c1adf91813f549f540c5d",
    })
      .then((response) => {
        console.log(response.data.results);
        setMovie(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setMovie]);

  return (
    <>
      <div className="container-header">
        <Search movie={movie} setMovie={setMovie}/>
      </div>
    </>
  );
}

export default App;
