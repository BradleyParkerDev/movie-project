import React from "react";
import MovieForm from "../components/MovieForm";
import { Outlet, useNavigate, useOutletContext  } from "react-router-dom";

const HomePage = () => {
    const {addMovie} = useOutletContext();

    return(
        <div>
            <MovieForm addMovie={addMovie}/>

        </div>
    );
}

export default HomePage;