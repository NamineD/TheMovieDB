import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import './Modal.css'

const Modal = ({id, title, item}) => {


    return (
        <>
            <div className="modal fade" id={id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" style={{color: 'black'}} id="exampleModalLabel">{title}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <img src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`} id="img-modal" className="card-img-top" alt="..." />
                            <p className="card-text" ><small className="text-muted"><FontAwesomeIcon id="star" icon={faStar} />{item.vote_average}</small></p>
                            <p className="card-text" >{item.overview}</p>
                            <p className="card-text" ><small className="text-muted">Release Date: {item.release_date}</small></p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal
