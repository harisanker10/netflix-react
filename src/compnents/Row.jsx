import { useEffect, useState, useRef } from "react";
import getMovies from "../utils/getMovies";
import MovieCard from "./MovieCard";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Circles } from "react-loading-icons";

function Row({ title, category }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const sliderRef = useRef(null);

  useEffect(() => {
    (async () => {
      setMovies(await getMovies(category, "small"));
      setIsLoading(false);
    })();
  }, [category]);

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 500,
        behavior: "smooth",
      });
    }
  };

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -500,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="group relative">
        <h2 className=" p-4 text-2xl font-bold text-white">{title}</h2>
        <MdChevronLeft
          size={35}
          className="absolute top-1/2 z-10 rounded-full bg-white opacity-0 transition-all group-hover:opacity-70"
          onClick={slideLeft}
        />
        {isLoading ? (
          <h1 className="text-4xl text-white">
            <Circles />
          </h1>
        ) : (
          <div
            ref={sliderRef}
            className="flex overflow-x-scroll scrollbar-hide"
          >
            {movies.map((movie) => (
              <MovieCard key={movie.id} item={movie} />
            ))}
          </div>
        )}
        <MdChevronRight
          size={35}
          className="absolute right-0 top-1/2 z-10 rounded-full bg-white opacity-0 transition-all group-hover:opacity-70"
          onClick={slideRight}
        />
      </div>
    </>
  );
}

export default Row;
