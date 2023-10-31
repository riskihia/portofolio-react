import { useState, useEffect } from "react";
import Navigation from "../Components/Navigation";

const Profile = () => {
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
      <h1>Profile</h1>
      <div className="my-10">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. A consectetur
        sint quos quidem repudiandae totam voluptatum, exercitationem, illum
        provident doloremque dignissimos officia iste in illo expedita odit
        debitis facere ducimus.
      </div>
      <div className="my-10">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. A consectetur
        sint quos quidem repudiandae totam voluptatum, exercitationem, illum
        provident doloremque dignissimos officia iste in illo expedita odit
        debitis facere ducimus.
      </div>
      <div className="my-10">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. A consectetur
        sint quos quidem repudiandae totam voluptatum, exercitationem, illum
        provident doloremque dignissimos officia iste in illo expedita odit
        debitis facere ducimus.
      </div>
      <div className="my-10">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. A consectetur
        sint quos quidem repudiandae totam voluptatum, exercitationem, illum
        provident doloremque dignissimos officia iste in illo expedita odit
        debitis facere ducimus.
      </div>
      <div className="my-10">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. A consectetur
        sint quos quidem repudiandae totam voluptatum, exercitationem, illum
        provident doloremque dignissimos officia iste in illo expedita odit
        debitis facere ducimus.
      </div>
      <Navigation width={width} />
    </div>
  );
};

export default Profile;
