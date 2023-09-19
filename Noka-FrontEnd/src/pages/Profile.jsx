import { useAuth } from "../context/AuthContext";
import NavbarAtom from "../components/atoms/NavbarAtom/NavBarAtom";

export default function Profile() {
  const { user } = useAuth(); // Obtén la información del usuario del contexto
  console.log(user);

  return (
    <>
      <NavbarAtom
        name_greeting={`Kaixo, ${user ? user.name : "lagun"}!`}
        subnavbar_subtitle={false}
      />
      <div></div>
    </>
  );
}
