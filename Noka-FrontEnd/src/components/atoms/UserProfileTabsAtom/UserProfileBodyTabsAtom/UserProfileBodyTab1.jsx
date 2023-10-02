import './userProfileBodyTabsAtom.css';
import { useAuth } from '../../../../context/AuthContext';
import { useState } from 'react';
import editIcon from './../../../../assets/icons/edit_icon.svg'
import ProfileUserInformationCard from '../ProfileUserInformationCards/ProfileUserInformationCard';
import Modal from 'react-modal'; 
import UserProfileEditModal from '../UserProfleEditModal/UserProfileEditModal';

Modal.setAppElement('#root'); 

function UserProfileBodyTab1() {

    const { user } = useAuth(); 
    console.log(user);


    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const openEditModal = () => {
        setIsEditModalOpen(true);
    };

    const closeEditModal = () => {
        setIsEditModalOpen(false);
    };

    const handleEdit = () => {
        openEditModal(); 
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


