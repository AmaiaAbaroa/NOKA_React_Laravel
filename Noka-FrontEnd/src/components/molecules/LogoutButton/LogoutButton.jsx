import { APIService } from "../../../services/APIService";
import ButtonAtom from "../../atoms/ButtonAtom/ButtonAtom";

const LogoutButton = () => {

  const handleLogout = async () => {
    try {
      // Utiliza APIService para realizar la petición de logout
      await APIService("/logout", "POST", {});

      // Elimina los datos del usuario del localStorage
      localStorage.removeItem("user");

      // Recarga la página y redirige a '/login'
        window.location.href ='/'; 
     
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <ButtonAtom
      label={"SAIOA ITXI"}
      color={"red"}
      width={"medium"}
      type={"submit"}
      action={handleLogout}
    ></ButtonAtom>
  );
};

export default LogoutButton;
