import { useNavigate } from "react-router-dom";
import { APIService } from "../../../services/APIService";
import ButtonAtom from "../../atoms/ButtonAtom/ButtonAtom";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Utiliza APIService para realizar la petición de logout
      await APIService("/logout", "POST", {});

      // Elimina los datos del usuario del localStorage
      localStorage.removeItem("user");

      // Redirige a '/login'
      navigate("/login");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <ButtonAtom
      label={"SAIOA ITXI"}
      color={"blue"}
      width={"big"}
      type={"submit"}
      action={handleLogout}
    ></ButtonAtom>
  );
};

export default LogoutButton;
