import React from "react";
import { Outlet, useNavigate, useOutletContext  } from "react-router-dom";
import Table from "../components/Table";

const DATA_URL = "https://raw.githubusercontent.com/dd-code-immersives/movie-project/main/react-intro-form/data/movies.json"

const MovieListPage = () => {
    const {movies,removeMovie } = useOutletContext();


    return(
        <div>
            {movies &&
                <Table 
                movies={movies || []}
                removeMovie={removeMovie}
            />
            }
        </div>


    )
}

export default MovieListPage;