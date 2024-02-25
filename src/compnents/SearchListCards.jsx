function SearchListCards({ movies }) {
  return (
    <>

      {
        !movies.length ? null : 
      <div className="bg-neutral-950 rounded-lg p-2 h-[30vh] flex flex-col overflow-y-scroll w-full">
        {
          movies.map(movie => 
            <div key={movie.id} className="flex py-2 px-4 align-center items-center w-full h-full">
              <div className="w-40 h-auto"><img className="w-full h-full object-cover" src={movie.backdrop_path} alt={movie.title} /></div>
              <h2 className="text-white text-xl text-center p-2 flex align-center justify-center px-8 font-bold">{movie.title}</h2>
            </div>
          )
        }
      </div>
      }
    </>
  )
}

export default SearchListCards
