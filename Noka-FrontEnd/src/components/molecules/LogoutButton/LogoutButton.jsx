import { APIService } from "../../../services/APIService";
import ButtonAtom from "../../atoms/ButtonAtom/ButtonAtom";

const LogoutButton = () => {

  const handleLogout = async () => {
    try {

      await APIService("/logout", "POST", {});

      localStorage.removeItem("user");

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
