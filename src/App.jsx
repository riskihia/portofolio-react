import React from "react";

const App = () => {
  const [user, setUser] = React.useState([]);
  const [mahasiswa, setMahasiswa] = React.useState({ name: "test" });

  const handleTukarMahasiswa = () => {
    // Lakukan perubahan nama mahasiswa sesuai kebutuhan
    console.log("diklik");
    mahasiswa.name == "test"
      ? setMahasiswa({ name: "riski" })
      : setMahasiswa({ name: "test" });
  };

  React.useEffect(() => {
    const myFetch = async () => {
      try {
        const headers = {
          Authorization: mahasiswa.name,
          // Anda dapat menambahkan header lain jika diperlukan
          // 'Content-Type': 'application/json',
        };
        let response = await fetch(
          "https://tanyacoding.my.id/api/users/current",
          {
            headers,
          }
        );
        let data = await response.json();

        // Periksa status respons HTTP
        if (!response.ok) {
          // Baca body respons sebagai JSON
          if (data.errors) {
            // Tangani pesan error dari server
            const errorData = data.errors;
            console.log("Pesan error dari server:", errorData);
            // Lakukan sesuatu dengan errorData, ini akan menjadi objek JSON
          } else {
            throw new Error(`Terjadi gangguan dengan kode: ${response.status}`);
          }
        } else {
          // Baca body respons sebagai JSON
          if (data.errors) {
            // Tangani pesan error dari server
            const errorMessage = data.errors.message[0];
            console.log(`Pesan error dari server: ${errorMessage}`);
            // Di sini Anda dapat melakukan sesuatu sesuai dengan pesan error, misalnya, menampilkan pesan kesalahan ke pengguna.
          } else {
            // Lanjutkan dengan logika normal jika tidak ada pesan error.
            setUser(data.data);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    myFetch();
  }, [mahasiswa]);
  return (
    <div>
      <div>
        <h1 className="text-4xl text-center">Data User {mahasiswa.name}</h1>
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
      </div>
    </div>
  );
};

export default App;
