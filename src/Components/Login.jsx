import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [error, setError] = useState(null);

  const doLogin = async (e) => {
    console.log("diclick");
    e.preventDefault();

    const formData = new FormData();

    formData.append("username", username);
    formData.append("password", password);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/users/login", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      console.log(data);
      if (!response.ok) {
        const errorMessage = data.errors
          ? data.errors.message[0]
          : `Terjadi gangguan dengan kode: ${response.status}`;
        setError(errorMessage);
        setToken("");
      } else {
        setToken(data.data.token);
        setError(null);
      }
    } catch (error) {
      console.log(error);
      setError("Terjadi kesalahan pada koneksi"); // Set a generic error message
      setToken("");
    }
  };

  return (
    <div>
      <form onSubmit={doLogin} action="" className="shadow-lg rounded-sm">
        <div className="mt-4">
          <label htmlFor="username">Username</label>
          <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            name="username"
            value={username}
            className="outline"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="password">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            name="password"
            value={password}
            className="outline"
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 py-1 px-2 mt-4 rounded-md text-white"
        >
          Sign in
        </button>
      </form>
      <div>
        {token && (
          <div className="mt-4">
            <p>Token: {token}</p>
          </div>
        )}

        {error && (
          <div className="mt-4 text-red-500">
            <p>{error}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
