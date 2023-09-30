import './userProfileBodyTabsAtom.css';
// import { APIService } from '../../../../services/APIService';
import { useAuth } from '../../../../context/AuthContext';
import { useState } from 'react';
import editIcon from './../../../../assets/icons/edit_icon.svg'
import ProfileUserInformationCard from '../ProfileUserInformationCards/ProfileUserInformationCard';
import Modal from 'react-modal'; 
import UserProfileEditModal from '../UserProfleEditModal/UserProfileEditModal';

// function UserProfileBodyTab1() {

//     const { user } = useAuth(); // Obtén la información del usuario del contexto
//     console.log(user);


//     const handleEdit = async () => {
//         try {
//           // Utiliza APIService para realizar la petición de logout
//           await APIService("/user", "PUT", {});
    
//           // Elimina los datos del usuario del localStorage
//           localStorage.removeItem("user");
    
//           // Recarga la página y redirige a '/login'
//             window.location.href ='/login'; 
         
//         } catch (error) {
//           console.error("Error al intenar editar:", error);
//         }
//       };
//   return (
//     <>
//       <section>
//         <div className='tabs_title_container'>
//             <h4 className="tabs_title">Nire datuak</h4>
//             <img src={editIcon} alt="Editatu irudia" onClick={handleEdit}/>
//         </div>
//         <ProfileUserInformationCard data_title={'Izena'} data_response={user ? user.name : ""}></ProfileUserInformationCard>
//         <ProfileUserInformationCard data_title={'Abizena'} data_response={user ? user.lastname : ""}></ProfileUserInformationCard>
//         <ProfileUserInformationCard data_title={'Helbide elektronikoa'} data_response={user ? user.email : ""}></ProfileUserInformationCard>
//         {/* <ProfileUserInformationCard data_title={'Pahahitza'} data_response={user ? user.password : ""}></ProfileUserInformationCard> */}
//         <ProfileUserInformationCard data_title={'Generoa'} data_response={user ? user.name : ""}></ProfileUserInformationCard>
//         <ProfileUserInformationCard data_title={'Jaiotze data'} data_response={user ? user.birthdate : ""}></ProfileUserInformationCard>
//         <ProfileUserInformationCard data_title={'Ikastetxearen probintzia'} data_response={user ? user.name : ""}></ProfileUserInformationCard>
//         <ProfileUserInformationCard data_title={'Kidegoa'} data_response={user ? user.name : ""}></ProfileUserInformationCard>
//         <ProfileUserInformationCard data_title={'Etapa'} data_response={user ? user.name : ""}></ProfileUserInformationCard>
//       </section>
//     </>
//   );
// }

// export default UserProfileBodyTab1 ;

Modal.setAppElement('#root'); 

function UserProfileBodyTab1() {

    const { user } = useAuth(); // Obtén la información del usuario del contexto
    console.log(user);


    const [isEditModalOpen, setIsEditModalOpen] = useState(false); // Estado para controlar la apertura del modal

    const openEditModal = () => {
        setIsEditModalOpen(true);
    };

    const closeEditModal = () => {
        setIsEditModalOpen(false);
    };

    const handleEdit = () => {
        openEditModal(); // Abre el modal cuando se hace clic en editIcon
    };


  return (
    <>
      <section>
        <div className='tabs_title_container'>
            <h4 className="tabs_title">Nire datuak</h4>
            <img src={editIcon} alt="Editatu irudia" onClick={handleEdit}/>
        </div>
        <ProfileUserInformationCard data_title={'Izena'} data_response={user ? user.name : ""}></ProfileUserInformationCard>
        <ProfileUserInformationCard data_title={'Abizena'} data_response={user ? user.lastname : ""}></ProfileUserInformationCard>
        <ProfileUserInformationCard data_title={'Helbide elektronikoa'} data_response={user ? user.email : ""}></ProfileUserInformationCard>
        {/* <ProfileUserInformationCard data_title={'Pahahitza'} data_response={user ? user.password : ""}></ProfileUserInformationCard> */}
        <ProfileUserInformationCard data_title={'Generoa'} data_response={user ? user.name : ""}></ProfileUserInformationCard>
        <ProfileUserInformationCard data_title={'Jaiotze data'} data_response={user ? user.birthdate : ""}></ProfileUserInformationCard>
        <ProfileUserInformationCard data_title={'Ikastetxearen probintzia'} data_response={user ? user.name : ""}></ProfileUserInformationCard>
        <ProfileUserInformationCard data_title={'Kidegoa'} data_response={user ? user.name : ""}></ProfileUserInformationCard>
        <ProfileUserInformationCard data_title={'Etapa'} data_response={user ? user.name : ""}></ProfileUserInformationCard>
      </section>

      <UserProfileEditModal
                isOpen={isEditModalOpen}
                onRequestClose={closeEditModal}
                initialUserData={user}
            />
    </>
  );
}

export default UserProfileBodyTab1 ;


