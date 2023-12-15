import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Movies = (props) => {

    const [Movies, setMovies] = useState([]);
    const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=c4bb2f90';

    const getMovies = async () => {
        try {

            const response = await fetch(url)


        } catch (err){
        console.log(err)
        }
    }

    useEffect(()=>{
        getMovies();
    }, []);

    return

}

export default Movies