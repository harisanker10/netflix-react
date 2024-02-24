import { useEffect, useState } from "react"
import getMovies from "../utils/getMovies";
import MovieCard from "./MovieCard";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

function Row({ title, category }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (
      async () => {
        setMovies(await getMovies(category,"small"));
        setIsLoading(false);
      }
    )()
  }, [category])
  return (
    <>
    <div className="relative group">
      <h2 className=" font-bold text-white text-2xl p-4">{title}</h2>
      <MdChevronLeft size={35} className="bg-white opacity-0 absolute z-10 top-1/2 group-hover:opacity-70 transition-all" />
      {
        isLoading ? <h1 className="text-white text-4xl">Loading...</h1> :
          <div className="flex overflow-x-scroll scrollbar-hide">
            {
              movies.map(movie => <MovieCard key={movie.id} item={movie} />)
            }
          </div>
      }
      <MdChevronRight size={35} className="bg-white opacity-0 absolute z-10 top-1/2 group-hover:opacity-70 right-0 transition-all" />

    </div>
    </>

  )
}

export default Row
