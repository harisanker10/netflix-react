import "./App.css";
import Home from "./pages/Home";
import Navbar from "./compnents/Navbar";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { AuthContextProvider } from "./context/AuthContext";
import UnauthenticatedRoute from "./compnents/UnauthenticatedRoute";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/login" element={<UnauthenticatedRoute><Login /></UnauthenticatedRoute>} />
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<UnauthenticatedRoute><Signup /></UnauthenticatedRoute>} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
