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
            dateAdded: new Date().toString()
        };

            //set our initial state to state.
            this.state = this.initalState;
    }  

    handleChange = event => {
        //get name, value out of target (element that changed)
        const { name, value } = event.target;

        //update our state 
        this.setState({
            [name]: value
        });
    }

    onFormSubmit = (event) => {
        //standard code for onSubmits 
        event.preventDefault();
        
        //set the current state of our form to the handle submit
        this.props.addMovie(this.state);

        //clear inputs by setting form to inital state
        this.setState(this.initialState);
        
    }

    render(){
        const {title,actors,plot,imdbRating,director,year} = this.state;

        return(
            <form onSubmit={this.onFormSubmit}>
                <h1>Movie Form</h1>
                <label htmlFor="title">Title: </label>  
                <input 
                    type = "text"
                    id = "title"
                    name= "title"
                    value = {title}
                    autocomplete = "off"
                    onChange = {this.handleChange}
                /><br/>
                <label htmlFor="actors">Actors: </label>  
                <input 
                    type = "text"
                    id = "actors"
                    name= "actors"
                    value = {actors}
                    autocomplete = "off"
                    onChange = {this.handleChange}
                /><br/>
                <label htmlFor="plot">Plot: </label>  
                <input 
                    type = "text"
                    id = "plot"
                    name= "plot"
                    value = {plot}
                    autocomplete = "off"
                    onChange = {this.handleChange}
                /><br/>
                <label htmlFor="imdbRating">IMDB Rating: </label>  
                <input 
                    type = "number"
                    min="1" 
                    max="10"
                    id = "imdbRating"
                    name= "imdbRating"
                    value = {imdbRating}
                    autocomplete = "off"
                    onChange = {this.handleChange}
                /><br/>
                <label htmlFor="director">Director: </label>  
                <input 
                    type = "text"
                    id = "director"
                    name= "director"
                    value = {director}
                    autocomplete = "off"
                    onChange = {this.handleChange}
                /><br/>
                <label htmlFor="year">Year: </label>  
                <input 
                    type = "text"
                    id = "year"
                    name= "year"
                    value = {year}
                    autocomplete = "off"
                    onChange = {this.handleChange}
                /><br/>
                <button type="submit">
                    Submit
                </button>
            </form>

        
        )
    }
}

export default MovieForm;
