import React from "react";
import SearchBar from "../components/SearchBar";
import Table from "../components/Table";
import { Outlet, useNavigate, useOutletContext  } from "react-router-dom";

const MoviePage = () => {
    const {moviePageMovie,filterMovies,removeMovie } = useOutletContext();
    return(
        <div>
            <SearchBar filterMovies={filterMovies}/>


            {moviePageMovie&&
                <Table
                    movies={moviePageMovie || []}
                    removeMovie={removeMovie}
                />
            }

        </div>
    );
}

export default MoviePage;