import "./signInSuccessPage.css";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import signInSuccess from "../../assets/img/SignInSuccess.png";
import ButtonAtom from "../../components/atoms/ButtonAtom/ButtonAtom";
import NavbarAtom from "../../components/atoms/NavbarAtom/NavBarAtom";

export default function SignInSuccessPage() {
  const { user } = useAuth(); // Obtén la información del usuario del contexto
  console.log(user);

  return (
    <>
      <NavbarAtom
        navbar_logo={true}
        logo_position={"no_login"}
        subnavbar_subtitle={true}
      />
      <main id="success_container">
        <h1 id="success_welcome">¡Zure eskaera bidalita izan da!</h1>
        <div id="success_img_container">
          <img src={signInSuccess} alt="" />
        </div>
        <p id="success_subtitle"> Sartu zure kontuan eta kuxkuxeatu NOKA.</p>

        <Link className="link-decoration" to="/login">
          <ButtonAtom
            label="NIRE KONTUA"
            color="white"
            width={"big"}
          ></ButtonAtom>
        </Link>
      </main>
    </>
  );
}
