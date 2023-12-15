import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";

const MoviesGenre = (props) => {
    const {id} = useParams();

    const [movie,setMovie] = useState(null);
    const getMovies = async()=> {
        try{

        }catch(err){
            console.log(err);
        }
    };

    useEffect(()=>{
        getMovies
    },[]);

    return
}

export default MoviesGenre