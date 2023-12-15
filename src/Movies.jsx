import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Movies = (props) => {

    const [Movies, setMovies] = useState([]);

    const getMovies = async () => {
        try {


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