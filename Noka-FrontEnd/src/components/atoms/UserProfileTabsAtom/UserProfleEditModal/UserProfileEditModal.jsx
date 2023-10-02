import './userProfileEditModal.css';
import { useState } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { APIService } from '../../../../services/APIService';
import { useAuth } from '../../../../context/AuthContext';

Modal.setAppElement('#root'); 

function UserProfileEditModal({ isOpen, onRequestClose, initialUserData }) {


    const { user } = useAuth();
    const [userData, setUserData] = useState(initialUserData);

    const handleSave = async () => {
        try {
        const body = {
            name: userData.name,
            lastname: userData.lastname,
            birthdate: userData.birthdate,
        };

            const response = await APIService(`/users/${user.id}`, "PUT", body);
            console.log("Response from API - EDIT:", response.data);
            console.log(typeof response);

            onRequestClose(); 

        } catch (error) {
            console.error("Error al intentar editar:", error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="profile_edit_modal_container"
        >
            <h2 className='profile_edit_title'>Zure profila editatu</h2>
            <form>
                <div className="profile_edit_modal_divs">
                    <label>Izena</label>
                    <input
                        type="text"
                        name="name"
                        value={userData.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="profile_edit_modal_divs">
                    <label>Abizena</label>
                    <input
                        type="text"
                        name="lastname"
                        value={userData.lastname}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="profile_edit_modal_divs">
                    <label>Jaiotze data</label>
                    <input
                        type="date"
                        name="birthdate"
                        value={userData.birthdate}
                        onChange={handleInputChange}
                    />
                </div>

                <button onClick={handleSave} className='profile_edit_modal_button'>GORDE</button>
            </form>
        </Modal>
    );
}

UserProfileEditModal.propTypes = {
    isOpen: PropTypes.any.isRequired,
    onRequestClose: PropTypes.any.isRequired,
    initialUserData: PropTypes.any.isRequired,
  };

export default UserProfileEditModal;
