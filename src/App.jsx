import { useState } from "react";
import { Login } from "./Components/Login";
import { Register } from "./Components/Register";

export const App = () => {
  const [user, setUser] = useState("");

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleLogout = () => {
    setUser("");
  };

  return (
    <>
      {user ? (
        <div>
          <h1> Hola de Nuevo {user} </h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <Login onLogin={handleLogin} />
          <hr />
          <Register />
        </div>
      )}
    </>
  );
};
