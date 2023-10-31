import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Feature from "./Pages/Feature";

const App = () => {
  return (
    <div className="max-w-sm mx-auto bg-gray-50 min-h-screen relative">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="feature" element={<Feature />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;
