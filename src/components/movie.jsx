import React, { Component } from 'react';
import MoviesTable from './moviesTable';
import Pagination from './pagination';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import { paginate } from '../Utils/pagination';
import ListGroup from '../Utils/listGroup';

// import { getGenres } from '../services/fakeGenreService';
class Movies extends Component {
    state = {
        movies: [],
        genres: [],
        currentPage: 1,
        pageSize: 4,
         };
    
    componentDidMount ()
    {
      
      const genress = [{ name: "All Genres" }, ...getGenres()]
      
      this.setState({ movies: getMovies(), genres: genress  });
    }
    
    handleDelete = (movie) => {
      const movies = this.state.movies.filter(m => m._id !== movie._id);
      this.setState({ movies });
    };
    
    handleChange = page => {
      this.setState({currentPage: page})
    }
    
    handleGenreSelect = genre => {
      this.setState({ selectedGenre: genre, currentPage: 1})
    }
    handleSort = path => {
      console.log(path)
    }
    render() { 
              
              const { length: count } = this.state.movies;
              const { pageSize, currentPage, selectedGenre, movies : allMovies} = this.state;
              
           if(count === 0)  
           return <p>There are no movies in the database</p>  
           
           const filtered = selectedGenre && selectedGenre._id
           
            ? allMovies.filter(m => m.genre._id === selectedGenre._id) : allMovies;
           
           const movies = paginate(filtered, currentPage, pageSize);
           
        return ( 
                <div className="row">
                <div className="col-2">
                
                <ListGroup items = {
                  this.state.genres
                  } 
                  selectedGen={this.state.selectedGenre}
                 onitemSelect={this.handleGenreSelect}
                 />
                
                </div>
                <div className="col">
                <p>Showing {filtered.length} in the database</p>
           <MoviesTable 
           movies={movies}
           onDelete={this.handleDelete}
           onSort={this.handleSort}
           />
        <Pagination 
        itemsCount={filtered.length} 
        pageSize={pageSize} 
        currentPage={currentPage}
        onPageChange={this.handleChange} 
        />
                </div> 
                </div>  
        );
    }
}
 
export default Movies;