import { config } from "@swc/core/spack";
import {useState, useEffect} from "react"
import { useParams } from "react-router-dom";

const MoviesGenre = (props) => {

    const {id} = useParams();
    
    const url = 'https://api.themoviedb.org/3/genre/movie/list';

    const [movie, setMovie] = useState(null);

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
      }
    };

    const getMovie = async () => {
        try {
            const response = await fetch(url, options)
            const movieData = await response.json();
            console.log(movieData)
            setMovie(movieData.results);
        }catch(err){
            console.log(err);
        }
    };


    useEffect(() => {
        getMovie()
      }, []);

    return (
        <div className="details-container">
      
          <div className="genre">
            <h2>GOTG vol.2</h2>
            <h3>(Guardians of the Galaxy)</h3>
            <h4>its really good</h4>
            <p>
             James Gunn Makes another Guardians Movie.
            </p>
            <a
              href= "https://en.wikipedia.org/wiki/Guardians_of_the_Galaxy_Vol._2"
              target="_blank"
              rel="noreferrer">learn more</a>
            
             
            
          </div>
        </div>
      );
}

export default MoviesGenre