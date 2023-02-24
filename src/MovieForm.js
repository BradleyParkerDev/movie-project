import React, { Component } from 'react';

class MovieForm extends Component{
    constructor(props){
        super(props);
    
        this.initalState = {
            title:'',
            actors:'',
            plot:'',
            imdbRating:'',
            director:'',
            year:'',
            dateAdded: Date.now()
        };
    }   
    render(){
        return(
            <form>
                <h1>Movie Form</h1>
                <label>Title: </label>  
                <input type = "text"/>
                <br/> 
                <label>Actors: </label>  
                <input type = "text"/>
                <br/> 
                <label>Plot: </label>  
                <input type = "text"/>
                <br/> 
                <label>IMBD Rating: </label>  
                <input type = "text"/>
                <br/> 
                <label>Director: </label>  
                <input type = "text"/>
                <br/> 
                <label>Year: </label>  
                <input type = "text"/>
                <br/> 
                <button type='submit' >Submit</button>
            </form>

        
        )
    }
}

export default MovieForm;
