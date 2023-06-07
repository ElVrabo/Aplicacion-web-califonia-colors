import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { PageAdmin } from "../config/router/paths";
import "bootstrap/dist/css/bootstrap.min.css";
import "../admin.css";

export function Admin() {
  /*Este componente puede hacer uso de las variables de estado que se definieron dentro del contexto UserContext*/
  const { usuario, setUsuario, password, setPassword } =
    useContext(UserContext);

  /*se crea una referencia del hook useNavigete */
  const navigate = useNavigate();
  const handleUsuario = (e) => {
    setUsuario(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const login = () => {
    if (usuario && password) {
      navigate(PageAdmin);
    } else {
      alert("rellena los campos con la informacion correcta");
    }
  };
  return (
    <>
      <div className="night">
        <div className="surface"></div>
        <div className="car"></div>
        <section>
          <div className="form-box">
            <div className="form-value">
              <form action="">
                <h2>Login</h2>
                <div className="inputbox">
                  <ion-icon name="mail-outline"></ion-icon>
                  <input
                    defaultValue={""}
                    onChange={handleUsuario}
                    type=""
                    required
                  />

                  <label for="">Usuario</label>
                </div>
                <div className="inputbox">
                  <ion-icon name="lock-closed-outline"></ion-icon>
                  <input
                    defaultValue={""}
                    onChange={handlePassword}
                    type="password"
                    required
                  />
                  <label for="">contraseña</label>
                </div>

                <button onClick={login}>Iniciar sesion</button>
                <div className="register">
                  <p></p>
                </div>
              </form>
              <button
                onClick={() => {
                  navigate("/inicio");
                }}
              >
                inicio
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
