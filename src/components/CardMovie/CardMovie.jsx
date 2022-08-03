import React from 'react'
import Modal from '../Modal/Modal';
import './CardMovie.css'

const CardMovie = ({data}) => {
    return (
        <div className="container">
    
            <div className="row aling-items-center">
                {data.map((item) => (
                <div className="poster-path" style={{maxWidth: '20rem'}} key={item.id} data-bs-toggle="modal" data-bs-target={`#id${item.id}`}>
                    <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} class="img-fluid" alt="movie" />
                    <Modal id={`id${item.id}`} item={item} title={item.title}/>
                </div>
                ))}
            </div>
        </div>
    );
}

export default CardMovie