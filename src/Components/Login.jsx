import { useForm } from "../Hooks/useForm";

export const Login = ({onLogin}) => {
  const { handleChange, handleReset, email, password } = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email && password) {
      onLogin(email);
      handleReset();
    } else {
      alert("Por favor rellene todos los campos");
    }
  };

  return (
    <>
      <h2>Inicar Sesion</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="text"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
        </div>
        <button type="submit">Inicar Sesion</button>
      </form>
    </>
  );
};
