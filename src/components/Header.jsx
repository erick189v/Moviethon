import { Link } from "react-router-dom";

function Header() {

  //an example of an inline style for the nav tag for an initial layout - later additions, or 

  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    borderBottom: ".2rem solid black",
    padding: ".5rem",
    width: "90%",
    margin: "auto",
  };

  const header = {
    display: "flex",
    justifyContent: "space-around",
    borderBottom: ".2rem solid black",
    padding: ".5rem",
    width: "90%",
    margin: "auto",
  }

  return (
    <header>
      <h1 style={header}>Welcome to the Moviethon</h1>
      <nav style={navStyle}>
        <Link to="/">
          <div>Home</div>
        </Link>
        <Link to="/movies">
          <div>All Movies</div>
        </Link>
        <Link to="genre">
          <div>Movies Genre</div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;