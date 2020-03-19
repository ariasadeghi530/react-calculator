import React from 'react'
import App from './App.js'
import { render } from '@testing-library/react'

function SearchMovie (props) {
render()
    return(
    
<div className="row">
<div className="col-md-6">
  <h4>Search For A Movie</h4>
  <form>
    <div className="form-group">
      <label htmlFor="title">Title</label>
      <input
        type="text"
        className="form-control"
        name="title"
        value={this.state.title}
        onChange={this.handleInputChange} />
    </div>
    <button className="btn btn-primary" onClick={this.handleSearchMovie}>Search Movie</button>
  </form>
  {this.state.movie.Title ?
    (<div className="card">
      <img src={this.state.movie.Poster} className="card-img-top" alt={this.state.movie.Title} />
      <div className="card-body">
        <h5 className="card-title">{this.state.movie.Title}</h5>
        <p className="card-text">Directed by {this.state.movie.Director}</p>
        <button className="btn btn-success" onClick={this.handleAddToWatchlist}>Add To Watchlist</button>
      </div>
    </div>) : null}
</div>
</div>
)
}
export default SearchMovie