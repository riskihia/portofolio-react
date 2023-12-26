import { useState } from "react";
import Navigation from "../Components/Navigation";
import Login from "../Components/Login";

const Home = () => {
  const [showForm, setShowForm] = useState(false);

  const showLoginForm = () => {
    if (showForm) {
      setShowForm(false);
    } else {
      setShowForm(true);
    }
  };

  return (
    <div className="h-screen">
      <h1 className="text-3xl">HOME</h1>
      <button
        onClick={showLoginForm}
        className="bg-blue-500 py-2 px-4 rounded-md text-white"
      >
        Login
      </button>
      {showForm && <Login />}
      <Navigation />
    </div>
  );
};

export default Home;
