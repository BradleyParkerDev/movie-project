import logo from './logo.svg';
import './App.css';
import Table from './components/MovieTable'
import MovieForm from './components/MovieForm';
import SearchBar from './components/SearchBar';
import NavBar from './components/Navbar';
import { useEffect, useState } from 'react';
import { Outlet } from "react-router-dom";


const DATA_URL = "https://raw.githubusercontent.com/dd-code-immersives/movie-project/main/react-intro-form/data/movies.json"


function App(props) {

	//we make a hook for movies into the state
  // because we are in a function
  const [movies, setMovies] = useState();
  const [moviePageMovie, setMoviePageMovie] = useState([]);
  console.log(movies);
// use effect is equivalent to "Component did Mount" runs
// after a  component has been rendered.
// component first renders when it's created
// also renders when a change happens to it 
  useEffect(() => {

	//asyncronously request data 
	// wait for promise to resolve
	// const moviesData = []
	fetch(DATA_URL)
	.then((result) => result.json())
	.then((result) => {
		setMovies(result);
	});

  }, [])
  // when we pass [] to useEffect -> it only runs once in the beginning
  // we can subscript multiple fields for it to run on 	


  const addMovie = (movie) => {
     setMovies([...movies, movie]);
  }

  const removeMovie = (toDelIdx) => {
    const filteredMovies = movies.filter((_, index) => {
       return index !== toDelIdx
    })
    setMovies(filteredMovies)
  }


  const filterMovies = (input, field) => {

	 const moviesFiltered = movies.filter((movie) => {
		   return movie[field].toLowerCase().includes(input.toLowerCase())
	 })

	 setMoviePageMovie(moviesFiltered)
  } 
  
  

return (

  <div className="App">
    <NavBar />
    <Outlet context={{moviePageMovie, movies,filterMovies,addMovie,removeMovie }}/>
  </div>
    );
  }


export default App;
