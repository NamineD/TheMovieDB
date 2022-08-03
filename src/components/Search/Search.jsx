import React, { useState, useEffect } from 'react'
import Axios from "axios";
import './Search.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import FilterStars from '../FilterStars/FilterStars';
import CardMovie from '../CardMovie/CardMovie';
import Loading from '../Loading/Loading'

const Search = ({movie, setMovies}) => {

  const [isLoaded, setIsLoaded] = useState(false);
  const [ data, setData ] = useState([])
  const [ query, setQuery ] = useState('');

  const peticionGet = async() => {
    await Axios.get(`https://api.themoviedb.org/3/search/movie?api_key=752c9fa4bc0c1adf91813f549f540c5d&query=${query}`)
    .then(response=>{
      setData(response.data.results);
    }).catch(error=>{
      console.log(error);
    })
  }

  const handleChange = e => {
    setQuery(e.target.value);
    filterMovie(e.target.value)
    setIsLoaded(true);
    setTimeout(()=>{
      setIsLoaded(false);
    }, 1000);
  }

  const filterMovie = (termSearch) => {
    let result = movie.filter((elemento)=>{
      if(elemento.title.toString().toLowerCase().includes(termSearch.toLowerCase())){
        console.log(elemento);
        return elemento;
      } 
    })
    setData(result);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      peticionGet();
    }, 1000);
    return () => peticionGet(timer);
  }, [])

  return (
    <>
      <div className="card bg-dark text-white">
          <img 
            src="https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Teaser/movie-maker-alternative.jpg" 
            className="card-img" 
            alt="movie-header"
          />
        <div className="card-img-overlay">
          <h1 className="card-title">Your favourite movie</h1>
          <p className="card-text-header">Find your next movie to watch</p>
          <div className='container-input' >
            <input 
              className='form-control inputSearch'
              value={query}
              placeholder="Search"
              onChange={handleChange}
            />
            <i className='btn btn-search'>
              <FontAwesomeIcon icon={faSearch} />
            </i>
          </div>
          
        </div>
        
        {isLoaded ? <Loading /> : 
        <div className="row aling-items-center">
            {data >=1 && data === [] && 
            <div className="alert alert-warning m-2" role="alert">
               There are no results
            </div>}
            {query.length === 0 ? 
              <div className='container-stars'>
                  <FilterStars movie={movie}/>
              </div> :
              <CardMovie data={data}/> 
            }
        </div> }
      </div>
    </>
  )
}

export default Search