import React, { useEffect, useState } from 'react';
import movieStyle from "../pages/movieStyle.css";

function MovieForm(props) {
    

   //set initial state  
   const [title, setTitle] = useState("film")
   const [actors,setActors] = useState(["actor1","actor2"])
   const [plot,setPlot] = useState("this is a plot")
   const [genre,setGenre] = useState("genre")
   const [imdbRating,setImdbRating] = useState(0.0)
   const [director,setDirector] = useState("Director")
   const [year,setYear] = useState(0)
   const [dateAdded, setDateAdded] = useState(new Date().toISOString())

    //reset inputs
    const reset = () => {
        setTitle("");
        setActors([]);
        setPlot("");
        setGenre("");
        setImdbRating(0.0);
        setDirector("");
        setYear(0);
    }

    const onFormSubmit = event => {

        event.preventDefault();
        const newDate = new Date().toISOString();
        
        props.addMovie({
            title, 
            actors, 
            plot,
            genre,
            imdbRating,
            director,
            year,
            newDate
        });
        console.log(newDate);

        //clear inputs by setting form to inital state
        setDateAdded(newDate);
        reset();
    
    }

    return (
        <form onSubmit={onFormSubmit}>
            <label htmlFor="title">Title :</label>
            
            <input 
                className='movieInput'
                type="text" 
                id="title" 
                name="title"
                value={title}
                onChange={e => setTitle(e.target.value)}
                /><br/>
            <label htmlFor="actors">Actors:</label>
            <input 
                className='movieInput'
                type="text" 
                id="actors" 
                name="actors"
                
                value={actors} 
                onChange={e => setActors(e.target.value)}
                />
            <br/>
             <label htmlFor="plot">Plot:</label>
             <input 
                className='movieInput'
                type="text" 
                id="plot" 
                name="plot"
                value={plot} 
                onChange={e => setPlot(e.target.value)}
                /><br/>
             <label htmlFor="genre">Genre:</label>
             <input
                className='movieInput'
                type="text" 
                id="genre" 
                name="genre"
                value={genre} 
                onChange={e => setGenre(e.target.value)}
                />
                <br/>
            <label htmlFor="imdbRating">imdbRating:</label>
             <input
                className='movieInput'
                type="text" 
                id="imdbRating" 
                name="imdbRating"
                value={imdbRating} 
                onChange={e => setImdbRating(e.target.value)}
                />
            <br/>
            <label htmlFor="director">Director:</label>
             <input
                className='movieInput'
                type="text" 
                id="director" 
                name="director"
                value={director} 
                onChange={e => setDirector(e.target.value)}
                />
            <br/>
            <label htmlFor="year">Year:</label>
             <input 
                className='movieInput'
                type="text" 
                id="year" 
                name="year"
                value={year} 
                onChange={e => setYear(e.target.value)}
            />
             <br/>
            <button type="submit">
                Submit
            </button>
        </form>
    );

        

}

export default MovieForm