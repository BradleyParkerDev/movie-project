import React from "react";
import Table from 'react-bootstrap/Table';


//TABLE HEADER SIMPLE COMPONENT
const FilteredTableHeader = () => {
return (
    <thead>
            <tr>
            <th>Title</th>
            <th>Actors</th>
            <th>Plot</th>
            <th>Genre</th>
            <th>IMDB Rating</th>
            <th>Director</th>
            <th>Year</th>
            <th>Date Added</th>
            </tr>
        </thead>
);
}




//TABLE BODY SIMPLE COMPONENT 
const FilteredTableBody = (props) => {
//construct rows
// use map to iterate over each row and wrap it in
// a html table row  
//registered an on click listener to remove the character
const rows = props.data.map((row, index) => {
    return (
    <tr key={index}>
        <td>{row.title}</td>
        <td>{row.actors.join(" ")}</td>
        <td>{row.plot}</td>
        <td>{row.genre}</td>
        <td>{row.imdbRating}</td>
        <td>{row.director}</td>
        <td>{row.year}</td>
        <td>{row.dateAdded}</td>
    </tr>
    )
})
//return rows wrapped in tbody
return <tbody>{rows}</tbody>
}


// MovieTable is our main Component
const FilteredMovieTable = (props) => {

const { 
    movies,
} = props;

return ( 


    <Table striped bordered hover responsive="lg" >
        <FilteredTableHeader/>
        <FilteredTableBody 
            data={movies} 
        />
    </Table>

)
}

export default FilteredMovieTable;