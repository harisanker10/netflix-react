import axios from 'axios'

const searchMovies = async (searchString, small) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyN2IwNmJmZDIzZjMwMDU4MWFkYzEyY2FjZDk4OGE1YSIsInN1YiI6IjY1ZDU4N2RhZTZkM2NjMDE3YmMwMjZkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bXpFD8povxOHnrcQxgoOupKPGSy-FWmkiIIjtlnU7TY'
    }
  };

  const searchURL = "https://api.themoviedb.org/3/search/movie";

  const { data } = await axios.get(`${searchURL}?query=${searchString}&language=en-US`, options)
  let base_url = "https://image.tmdb.org/t/p/original/";
  if(small) base_url = "https://image.tmdb.org/t/p/w500/"
  return data.results.map(movie => { return { ...movie, backdrop_path: base_url + movie.backdrop_path } });
}

export default searchMovies;
