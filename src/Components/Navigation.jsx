/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Navigation = (props) => {
  return (
    <div
      className={`bg-blue-500 text-white flex justify-between items-center px-1 fixed bottom-0 w-[${props.width}px]`}
    >
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
