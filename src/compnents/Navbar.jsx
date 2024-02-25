import { useState } from "react";
import createUser from "../utils/firebase";
import searchMovies from "../utils/searchMovies";
import SearchListCards from "./SearchListCards";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [searchString, setSearchString] = useState("");
  const [movies, setMovies] = useState([]);

  const handleOnChange = (event) => {
    setSearchString(event.target.value);
    (async () => {
      setMovies(await searchMovies(event.target.value, "small"));
    })();
  };

  const handleOnBlur = () => {
    setMovies([]);
  };

  return (
    <div className="w-full p-5 px-10 flex items-center justify-between bg-transparent absolute z-50 ">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-black cursor-pointer md:text-6xl">
          NETFLIX
        </h1>
      </Link>
      <div className="w-1/3 hidden md:block relative">
        <input
          type="text"
          className="p-4 py-3 w-full rounded-lg bg-neutral-950 focus:outline-none text-white text-xl "
          value={searchString}
          onChange={handleOnChange}
          onBlur={handleOnBlur}
          onFocus={handleOnChange}
          placeholder="Search"
        />
        <div className="w-full absolute">
          <SearchListCards movies={movies} />
        </div>
      </div>
      <div>
        <Link to="/login">
          <button className="text-lg font-bold px-4 py-2 rounded text-white md:text-2xl">
            Sign In
          </button>
        </Link>
        <Link to="/signup">
          <button className="text-lg font-bold px-4 py-2 bg-red-600 rounded text-white md:text-2xl">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
