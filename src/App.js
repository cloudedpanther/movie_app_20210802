import React from "react";
import axios from "axios";
import Movies from "./Movies";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  }
  async getMovies() {
    const { data: { data: { movies } } } = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false });
  }
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return <div>{isLoading ? "Loading..." : movies.map(movies => <Movies key={movies.id} id={movies.id} year={movies.year} title={movies.title} summary={movies.summary} poster={movies.medium_cover_image} />)}</div>
  }
}

export default App;
