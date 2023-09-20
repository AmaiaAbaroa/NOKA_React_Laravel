import PropTypes from 'prop-types';
import { useAuth } from '../../../../context/AuthContext';
import './ProfileBannerAtom.css';
import jerryProfile from '../../../../assets/img/Jerry_cheese.png';

function ProfileBannerAtom({user_name, user_surname}) {

    const { user } = useAuth(); // Obtén la información del usuario del contexto
    console.log(user);

    return (
    <>
      <div className='profile_banner_container'>
            <img src={jerryProfile} alt="Foto de perfil de usuario" />
            <h2 className='profile_banner_name'>{user_name} {user_surname}</h2>
      </div>
    </>
    );
  }

    ProfileBannerAtom.propTypes = {
    user_name: PropTypes.string.isRequired,
    user_surname: PropTypes.string.isRequired,
  };
  
  export default ProfileBannerAtom;