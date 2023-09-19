import { useAuth } from "../context/AuthContext";
import NavbarAtom from "../components/atoms/NavbarAtom/NavBarAtom";
import FooterAtom from "../components/atoms/FooterAtom/FooterAtom";

export default function Profile() {
  const { user } = useAuth(); // Obtén la información del usuario del contexto
  console.log(user);

  return (
    <>
      <NavbarAtom
        name_greeting={`Kaixo, ${user ? user.name : "lagun"}!`}
        subnavbar_subtitle={false}
      />
      <main>

      </main>
      <FooterAtom logo={true}></FooterAtom>
    </>
  );
}
