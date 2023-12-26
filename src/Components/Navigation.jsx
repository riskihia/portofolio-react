import { Link } from "react-router-dom";
import {
  faHome,
  faCirclePlus,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navigation = () => {
  return (
    <div className="bg-[#6800F4] text-white flex justify-evenly items-center px-1 fixed bottom-0 w-full md:max-w-sm rounded-t-lg shadow-md">
      <div className="cursor-pointer">
        <Link to="/" className="flex flex-col pt-2">
          <FontAwesomeIcon icon={faHome} size="xl" />
          <span className="text-base">Home</span>
        </Link>
      </div>
      <div className="cursor-pointer">
        <Link to="/feature" className="flex flex-col pt-2">
          <FontAwesomeIcon icon={faCirclePlus} size="xl" />
          <span className="text-base">Feature</span>
        </Link>
      </div>
      <div className="cursor-pointer">
        <Link to="/profile" className="flex flex-col pt-2">
          <FontAwesomeIcon icon={faUser} size="xl" />
          <span className="text-base">Profile</span>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
