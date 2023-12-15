import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Movies = (props) => {

    const [Movies, setMovies] = useState([]);
    const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=c4bb2f90';

    const getMovies = async () => {
        try {

            const response = await fetch(url)
            const movieData = await response.json()
            console.log(movieData);
            setMovies(movieData);



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
            
            
            
            </Link>
    
        ))


    )

}

export default Movies