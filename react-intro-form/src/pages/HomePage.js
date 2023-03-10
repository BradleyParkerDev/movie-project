// import React from "react";
import MovieForm from "../components/MovieForm";
import { Outlet, useNavigate, useOutletContext  } from "react-router-dom";
import homePhoto from "./homePhoto.png"
import movieStyle from "./movieStyle.css"

const HomePage = () => {

 

    return(
        
        <div>
        <p>Welcome!</p>

        <div id="homePageContainer">
  
        <img id='homePhoto' src={homePhoto}></img>

        </div>


        </div>


    );
}

export default HomePage;