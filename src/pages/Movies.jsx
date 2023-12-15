import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Movies = (props) => {

    const [movies, setMovies] = useState([]);

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`      }
    };

    const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';

    const getMovies = async () => {
        try {

            const response = await fetch(url,options)
            const movieData = await response.json()
            console.log(movieData.results);
            setMovies(movieData.results);



        } catch (err){
        console.log(err)
        }
    }

    useEffect(()=>{
        getMovies();
    }, []);

    return (

        movies.map((movie)=>(
            <Link to= {'/genre/${movie.id}'}key={movie.id}>
            <div className="card">
              <div className="card-image">
                {/* <img src={movie.image} alt={movie.name} /> */}
              </div>
              <div className="card-title">
                <h3>{movie.title}</h3>
              </div>
            </div>
            
            </Link>

    
        ))
        

    )

}

export default Movies