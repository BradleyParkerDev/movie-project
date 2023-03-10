// import React from "react";
import { Outlet, useNavigate, useOutletContext  } from "react-router-dom";
import MovieTable from "../components/MovieTable";
import MovieForm from "../components/MovieForm";
import MovieStyle from "./movieStyle.css"


import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';







const DATA_URL = "https://raw.githubusercontent.com/dd-code-immersives/movie-project/main/react-intro-form/data/movies.json"

const MovieListPage = () => {
    const {movies,removeMovie,addMovie } = useOutletContext();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        
        
        <div>
            {/* <MovieForm addMovie={addMovie}/> */}

            <>
      <Button variant="primary" onClick={handleShow}>
        Add Movie      

        </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body id="addForm"><MovieForm addMovie={addMovie}/></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>
    </>


















            <div id = "movie-container">
                {movies &&
                    <MovieTable 
                    movies={movies || []}
                    removeMovie={removeMovie}
                />
                }
            </div>


        </div>



    )
}

export default MovieListPage;