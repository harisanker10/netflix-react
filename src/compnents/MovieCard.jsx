import { FaHeart, FaRegHeart } from 'react-icons/fa';


function MovieCard({ item }) {

  return (
    <div className="relative mr-3 shrink-0 text-white w-[160px] sm:w-[200px] md:w-[240px] inline-block">
      <img className="w-full h-full object-cover" src={item?.backdrop_path} alt={item?.title} />
      <div className="transition-all flex flex-col justify-center align-center w-full opacity-0 h-full absolute top-0 hover:bg-black hover:opacity-70 p-4">

        <div className='justify-self-start self-start'>
          <FaHeart />
        </div>
        <h2 className="font-extrabold text-2xl text-center">{item?.title}</h2>
      </div>
    </div>
  )
}

export default MovieCard
