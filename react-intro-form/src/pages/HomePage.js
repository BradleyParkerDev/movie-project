import React from "react";
import MovieForm from "../components/MovieForm";
import { Outlet, useNavigate, useOutletContext  } from "react-router-dom";

const HomePage = () => {
    const {addMovie} = useOutletContext();

    return(
        <> </>
            // <MovieForm addMovie={addMovie}/>

    );
}

export default HomePage;