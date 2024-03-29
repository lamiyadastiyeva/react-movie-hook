import React,{useContext} from 'react'
import { NavLink, Link } from 'react-router-dom'
import { MovieContext } from './pages/MovieContext'
//import MovieList from './pages/MovieList'

const Header = () => {
  const [movies,setMovies] = useContext(MovieContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand" exact to="/">Movie</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link" exact  activeClassName="active" aria-current="page" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/movies">Movie List({movies.length})</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/contact">Contact</NavLink>
          </li>

         
         
        </ul>
        <div className="d-flex">
            <NavLink className="btn btn-secondary" activeClassName="active" to="/add">Add Movies</NavLink>
          </div>
      </div>
    </div>
  </nav>
  )
}

export default Header