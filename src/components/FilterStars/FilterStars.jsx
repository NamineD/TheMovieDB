import React, { useState, useEffect } from 'react'
import PopularMovie from '../PopularMovies/PopularMovies'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedo } from '@fortawesome/free-solid-svg-icons';
import './FilterStars.css'

const isInRange = (stars, movie) => {
  let inRange = false
  switch(stars){
      case '' :
          inRange = true
          break
      case '1' : 
          inRange = movie.vote_average >= 8
          break
      case '2' : 
          inRange = movie.vote_average >= 6 && movie.vote_average <= 8
          break
      case '3' : 
          inRange = movie.vote_average >= 4 && movie.vote_average <= 6
          break
      case '4' : 
          inRange = movie.vote_average >= 2 && movie.vote_average <= 4
          break
      case '5' : 
          inRange = movie.vote_average >= 0 && movie.vote_average <= 2
          break
      default:
          inRange = false
  }
  return inRange
}

const FilterStars = ({movie}) => {

  const [ star, setStar ] = useState('');
  const filteredMovies = movie.filter(aMovie => isInRange(star, aMovie));


  const onChange = e => {
    setStar(e.target.value);
  }

  const resetForm = () => {
    setStar('')
  }

  return (
    <>
        <form >
            <p className="clasificacion">
                <input id="radio1" type="radio" name="estrellas" value='1' checked={star === '1'} onChange={onChange} />
                <label htmlFor="radio1">★</label>
                <input id="radio2" type="radio" name="estrellas" value='2' checked={star === '2'} onChange={onChange}/>
                <label htmlFor="radio2">★</label>
                <input id="radio3" type="radio" name="estrellas" value="3" checked={star === '3'} onChange={onChange}/>
                <label htmlFor="radio3">★</label>
                <input id="radio4" type="radio" name="estrellas" value="4" checked={star === '4'} onChange={onChange}/>
                <label htmlFor="radio4">★</label>
                <input id="radio5" type="radio" name="estrellas" value="5" checked={star === '5'} onChange={onChange}/>
                <label htmlFor="radio5">★</label>

              <button className='btn btn-search' type='reset' onClick={resetForm}> <FontAwesomeIcon icon={faRedo} /> </button>
            </p>
        </form>
        {filteredMovies.length === 0 ? 
          <div className="alert alert-warning m-2" role="alert">
            There are no results
          </div> :
          <div className="row aling-items-center">
              <PopularMovie movie={filteredMovies} />
          </div>
        }
    </>
  )
}

export default FilterStars