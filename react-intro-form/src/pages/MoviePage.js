import React from "react";
import SearchBar from "../components/SearchBar";
import MovieTable from "../components/MovieTable";
import movieStyle from "./movieStyle.css"
import { Outlet, useNavigate, useOutletContext  } from "react-router-dom";
import FilteredMovieTable from "../components/FilteredMovieTable";

const MoviePage = () => {
    const {moviePageMovie,filterMovies } = useOutletContext();
    return(
        
        <div>
            <SearchBar filterMovies={filterMovies}/>
            <div id="movie-container">



                {moviePageMovie&&
                    <FilteredMovieTable
                        movies={moviePageMovie || []}
                    />
                }

            </div>


        </div>
        

    );
}

export default MoviePage;