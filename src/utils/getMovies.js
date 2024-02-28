import axios from "axios";
const getMovies = async (category = "popular", small) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyN2IwNmJmZDIzZjMwMDU4MWFkYzEyY2FjZDk4OGE1YSIsInN1YiI6IjY1ZDU4N2RhZTZkM2NjMDE3YmMwMjZkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bXpFD8povxOHnrcQxgoOupKPGSy-FWmkiIIjtlnU7TY",
    },
  };

  const requestList = {
    popular: `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`,
    topRated: `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`,
    trending: `https://api.themoviedb.org/3/movie/popular?language=en-US&page=2`,
    horror: `https://api.themoviedb.org/3/search/movie?language=en-US&query=horror&page=1&include_adult=false`,
    upcoming: `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`,
  };

  const { data } = await axios.get(requestList[category], options);
  let base_url = "https://image.tmdb.org/t/p/original/";
  if (small) base_url = "https://image.tmdb.org/t/p/w500/";
  return data.results.map((movie) => {
    return movie.backdrop_path
      ? { ...movie, backdrop_path: base_url + movie.backdrop_path }
      : null;
  }).filter((movie) => {
    return movie !== null; 
  })
};

export default getMovies;
