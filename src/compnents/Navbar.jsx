const Navbar = () => {

  return (
    <div className="w-full p-5 px-10 flex items-center justify-between bg-transparent absolute z-50 ">
      <h1 className="text-red-600 text-4xl font-black cursor-pointer md:text-6xl">NETFLIX</h1>
      <div>
        <button className="text-lg font-bold px-4 py-2 rounded text-white md:text-2xl" >Sign In</button>
        <button className="text-lg font-bold px-4 py-2 bg-red-600 rounded text-white md:text-2xl" >Sign Up</button>
      </div>
    </div>
  )
}

export default Navbar
