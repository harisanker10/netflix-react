import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

function Signup() {
  const { signUp, user } = UserAuth();
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  console.log(user);

  function handleOnChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  const handleOnSubmit = async (event) => {
    console.log(event);
    event.preventDefault();
    try {
      await signUp(formData.email, formData.password);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center relative">
      <img
        className="absolute w-full h-full object-cover z-10"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt="backdrop-image"
      />

      <div className="absolute w-full h-full bg-black/70 z-10">Signup</div>

      <div className="w-[400px] h-[550px] bg-black/90 p-10 rounded-lg shadow-white z-40 box-border text-white md:w-[500px] ">
        <form action="" onSubmit={handleOnSubmit}>
          <h1 className="text-white font-extrabold text-3xl mb-10 mt-4 md:text-4xl">
            Sign Up
          </h1>
          <input
            className="w-full h-14 px-5 text-lg mb-4 bg-stone-900 text-white rounded-md outline-none md:h-16 md:text-xl"
            type="email"
            name="email"
            id=""
            onChange={handleOnChange}
            placeholder="E-mail"
          />
          <input
            className="w-full h-14 px-5 text-lg mb-4 bg-stone-900 text-white rounded-md outline-none md:h-16 md:text-xl"
            type="password"
            name="password"
            id="password"
            onChange={handleOnChange}
            placeholder="Password"
          />
          <button
            type="submit"
            className="bg-red-700 font-black text-xl w-full p-3 rounded mt-8 md:p-4 md:text-2xl"
          >
            Sign Up
          </button>
          <div className="mt-3 flex w-full justify-between text-lg font-extrabold text-gray-600">
            <div>
              <label className="inline-block">
                <input
                  className="outline-none border-none inline-block mr-2"
                  type="checkbox"
                />
                Remember Me
              </label>
            </div>
            <p>Need Help?</p>
          </div>
          <p className="inline-block mt-10 font-extrabold text-lg text-gray-600">
            Already subscribed to Netflix?
          </p>
          <Link to="/login">
            <p className="inline-block ml-1 font-extrabold text-lg">Sign In.</p>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
