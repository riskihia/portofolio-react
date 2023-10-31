import { useState, useEffect } from "react";
import Navigation from "../Components/Navigation";

const Homexx = () => {
  const [mahasiswa, setMahasiswa] = useState("test");
  const [user, setUser] = useState(null);

  const handleTukarMahasiswa = () => {
    setMahasiswa((prevMahasiswa) =>
      prevMahasiswa === "test" ? "riski" : "test"
    );
  };

  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  const [width, setWidth] = useState(window.innerWidth - 500);

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  useEffect(() => {
    const updateDimension = () => {
      // setScreenSize(getCurrentDimension());

      const newDimension = getCurrentDimension();
      newDimension.width -= 500;
      setWidth(newDimension);
      setScreenSize(newDimension);
      console.log("Screen Width:", newDimension.width);
    };
    window.addEventListener("resize", updateDimension);

    // return () => {
    //   window.removeEventListener("resize", updateDimension);
    // };
  }, [screenSize]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const headers = {
          Authorization: mahasiswa,
        };
        const response = await fetch(
          "https://tanyacoding.my.id/api/users/current",
          {
            headers,
          }
        );
        const data = await response.json();

        if (!response.ok) {
          const errorMessage = data.errors
            ? data.errors.message[0]
            : `Terjadi gangguan dengan kode: ${response.status}`;
          console.log(`Pesan error dari server: ${errorMessage}`);
        } else {
          setUser(data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [mahasiswa]);

  return (
    <div
      className={`max-w-[${width}px] mx-auto bg-violet-500 min-h-screen max-h-screen relative`}
    >
      <div>
        <ul>
          <li>
            Width: <strong>{screenSize.width}</strong>
          </li>
          <li>
            Height: <strong>{screenSize.height}</strong>
          </li>
        </ul>
      </div>
      <h1 className="text-4xl text-center">Data User {mahasiswa}</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 my-3 text-white font-bold py-2 px-4 rounded"
        onClick={handleTukarMahasiswa}
      >
        Tukar Mahasiswa
      </button>
      {user && (
        <ul className="border border-gray-200 rounded-md max-w-[300px] p-3">
          <li>ID: {user.id}</li>
          <li>Username: {user.username}</li>
          <li>Name: {user.name}</li>
          <li>Token: {user.token}</li>
        </ul>
      )}

      <Navigation />
    </div>
  );
};

export default Homexx;
