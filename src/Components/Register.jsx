import { useForm } from "../Hooks/useForm";

export const Register = () => {
  const { handleChange, handleReset, values } = useForm({
    firtName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Registrando usuario con los datos:", values);
    alert("¡Datos de registro enviados a la consola!");
    handleReset();
  };

  return (
    <>
      <h2>Registrarse</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre</label>
          <br />
          <input
            type="text"
            name="firstname"
            value={values.firstname}
            onChange={handleChange}
            placeholder="Diego"
            required
          />
        </div>
        <div>
          <label>Apellido</label>
          <br />
          <input
            type="text"
            name="lastname"
            value={values.lastname}
            onChange={handleChange}
            placeholder="Garcia"
            required
          />
        </div>
        <div>
          <label>Nombre de Usuario</label>
          <br />
          <input
            type="text"
            name="username"
            value={values.username}
            onChange={handleChange}
            placeholder="Diego_Garcia"
            required
          />
        </div>
        <div>
          <label>Email</label>
          <br />
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="email@ejemplo.com"
            required
          />
        </div>
        <div>
          <label>Contraseña</label>
          <br />
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            placeholder="••••••••"
            required
          />
        </div>
        <br />
        <button type="submit">Register</button>
      </form>
    </>
  );
};
