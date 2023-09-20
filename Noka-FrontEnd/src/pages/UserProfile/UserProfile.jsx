import './userProfile.css';
import { useAuth } from "../../context/AuthContext";
import NavbarAtom from "../../components/atoms/NavbarAtom/NavBarAtom";
import ProfileBannerAtom from "../../components/atoms/UserProfileTabsAtom/ProfileBannerAtom/ProfileBannerAtom";
import ProfileTabsAtom from "../../components/atoms/UserProfileTabsAtom/ProfileTabsAtom/ProfileTabsAtom";
import UserProfileBodyTab1 from "../../components/atoms/UserProfileTabsAtom/UserProfileBodyTabsAtom/UserProfileBodyTab1";
import FooterAtom from '../../components/atoms/FooterAtom/FooterAtom';
export default function UserProfile() {
  const { user } = useAuth(); // Obtén la información del usuario del contexto
  console.log(user);

  return (
    <>
      <NavbarAtom
        name_greeting={`Kaixo, ${user ? user.name : "lagun"}!`}
        subnavbar_subtitle={false}
      />
      <main>
        <ProfileBannerAtom user_name={user ? user.name : ""} user_surname={"Looney"}></ProfileBannerAtom>
        <ProfileTabsAtom
          element_tab1={<UserProfileBodyTab1></UserProfileBodyTab1>}
          // element_fase2={<UserProfileBodyTab2></UserProfileBodyTab2>}
          // element_fase3={<UserProfileBodyTab3></UserProfileBodyTab3>}
        ></ProfileTabsAtom>
      </main>
        <FooterAtom logo={false}></FooterAtom>
    </>
  );
}
