import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Feature from "./Pages/Feature";

const App = () => {
  return (
    <div className="min-h-screen md:max-w-sm mx-auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="feature" element={<Feature />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;
