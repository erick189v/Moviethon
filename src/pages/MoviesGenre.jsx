const MoviesGenre = (props) => {

    const {id} = useParams();
    
    const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=c4bb2f90';

    const [movie, setMovie] = useState(null);

    const getMovie = async () => {
        try {
            const response = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=c4bb2f90")
            const movieData = await response.json();
            setMovie(movieData.results);
        }catch(err){
            console.log(err);
        }
    };


    useEffect(() => {
        getMovies
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