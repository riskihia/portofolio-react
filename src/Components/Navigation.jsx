import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="bg-blue-500 text-white flex justify-between items-center px-1 absolute left-0 right-0 bottom-0">
      <div className="cursor-pointer text-xl py-2">
        <Link to="/">Home</Link>
      </div>
      <div className="cursor-pointer text-xl py-2">
        <Link to="/feature">Feature</Link>
      </div>
      <div className="cursor-pointer text-xl py-2">
        <Link to="/profile">Profile</Link>
      </div>
    </div>
  );
};

export default Navigation;
