import { useState, useEffect } from "react";
import Navigation from "../Components/Navigation";

const Home = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    if (width > 400) {
      setWidth(382);
    }
  }, [width]);

  return (
    <div
      style={{ width: `${width}px` }}
      className={`mx-auto bg-violet-500 min-h-screen max-h-screen relative`}
    >
      <div>
        <ul>
          <li>Width:</li>
          <li>
            Height: <strong></strong>
          </li>
        </ul>
      </div>
      <Navigation width={width} />
    </div>
  );
};

export default Home;
