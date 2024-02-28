import { useState } from "react";
import searchMovies from "../utils/searchMovies";
import SearchListCards from "./SearchListCards";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { logOut, user } = UserAuth();
  const [searchString, setSearchString] = useState("");
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  console.log("user........", user);
  const handleOnChange = (event) => {
    setSearchString(event.target.value);
    (async () => {
      setMovies(await searchMovies(event.target.value, "small"));
    })();
  };

  const handleOnBlur = () => {
    setMovies([]);
  };

  const navButtons = () => {
    if (user === null) {
      console.log("user is null");
      return (
        <div>
          <Link to="/login">
            <button className="rounded px-4 py-2 text-lg font-bold text-white md:text-2xl">
              Sign In
            </button>
          </Link>
          <Link to="/signup">
            <button className="rounded bg-red-600 px-4 py-2 text-lg font-bold text-white md:text-2xl">
              Sign Up
            </button>
          </Link>
        </div>
      );
    } else if (user === undefined) {
      console.log("user is undefined");
      return (
        <div>
          <button className="rounded px-4 py-2 text-lg font-bold text-white md:text-2xl"></button>
          <button className="rounded bg-red-600 px-4 py-2 text-lg font-bold text-red-600  md:text-2xl">
            Log Out
          </button>
        </div>
      );
    } else if (user?.email) {
      console.log("user is present");
      return (
        <div>
          <Link to="/login">
            <button className="rounded px-4 py-2 text-lg font-bold text-white md:text-2xl">
              Account
            </button>
          </Link>
          <button
            onClick={() => {
              navigate("/");
              logOut();
            }}
            className="rounded bg-red-600 px-4 py-2 text-lg font-bold text-white md:text-2xl"
          >
            Log Out
          </button>
        </div>
      );
    }
  };

  return (
    <div className="absolute z-50 flex w-full items-center justify-between bg-transparent p-5 px-10">
      <Link to="/">
        <h1 className="cursor-pointer text-4xl font-black text-red-600 md:text-6xl">
          NETFLIX
        </h1>
      </Link>

      <div className="relative hidden w-1/3 md:block">
        <input
          type="text"
          className="w-full rounded-lg bg-neutral-950 p-4 py-3 text-xl text-white focus:outline-none"
          value={searchString}
          onChange={handleOnChange}
          onBlur={handleOnBlur}
          onFocus={handleOnChange}
          placeholder="Search"
        />
        <div className="absolute w-full">
          {<SearchListCards movies={movies} />}
        </div>
      </div>
      {navButtons()}
    </div>
  );
};

export default Navbar;
