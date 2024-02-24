import { useEffect, useState } from 'react';
import getMovies from '../utils/getMovies';
import truncate from '../utils/truncate';

function Main() {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    try {
      (
        async () => {
          const newMovies = await getMovies();

          console.log(newMovies);
          setMovies(() => newMovies);
          setLoading(false);
        }
      )();
    } catch (err) {
      console.log('error : ', err);
    }
  }, [])


  const movie = movies[Math.floor(Math.random() * movies.length)];

  return (
    <>
    {!loading ? (
        <div className="w-screen h-[75vh] relative">
          <div className='w-full h-full '>
            <div className='w-full h-full absolute bg-gradient-to-r from-black'></div>
            <img className='w-full h-full object-cover' src={movie?.backdrop_path} alt={movie?.title} />
          </div>
          <div className='absolute top-[40%] text-white px-4 w-full md:w-3/4 md:px-10 lg:w-1/2 '>
            <h2 className='text-3xl font-extrabold my-4 md:text-4xl lg:text-5xl'>{movie.title}</h2>
            <button className='px-6 py-2 font-bold text-xl bg-gray-200 text-black md:px-8 md:py-4 md:text-2xl'>Play</button>
            <button className='px-6 py-2 text-xl font-bold border border-white ms-2 md:px-8 md:py-4 md:text-2xl md:ms-6'>Watch Later</button>
            <div className='my-4 text-gray-500 text-xl'>Released {movie?.release_date}</div>
            <div className='font-medium my-4 text-xl md:text-2xl'>{truncate(movie?.overview,200)}</div>
          </div>
        </div>
    )
        : (<h1>Loading</h1>)
    }
  </>
  )
}

export default Main
