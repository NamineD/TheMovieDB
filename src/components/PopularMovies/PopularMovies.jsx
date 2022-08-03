import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Modal from "../Modal/Modal";
import './PopularMovies.css'

function PopularMovie({movie}) {
  
  return (
    <div className="container">

      <h2 className="popular-movies"><FontAwesomeIcon id="star" icon={faStar} /> Popular movies</h2>

        <div className="row aling-items-center">
            {movie.map((item) => (
            <div className="poster-path" style={{maxWidth: '20rem'}} key={item.id} data-bs-toggle="modal" data-bs-target={`#id${item.id}`}>
                <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} class="img-fluid" alt="movie" />
                <Modal id={`id${item.id}`} item={item} title={item.title}/>
            </div>
            ))}
        </div>
    </div>
  );
}

export default PopularMovie;