import { useState } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { APIService } from '../../../../services/APIService';
import { useAuth } from '../../../../context/AuthContext';

Modal.setAppElement('#root'); 

function UserProfileEditModal({ isOpen, onRequestClose, initialUserData }) {


    const { user } = useAuth();
    const [userData, setUserData] = useState(initialUserData);

    // const handleSave = async (name, email, lastname, birthdate) => {
    //     const body = {
    //         name,
    //         email,
    //         lastname,
    //         birthdate
    //     }
    const handleSave = async () => {
        try {
        // Crea un objeto con los datos a actualizar
        const body = {
            name: userData.name,
            lastname: userData.lastname,
            birthdate: userData.birthdate,
        };
        
            // Realiza la solicitud PUT para actualizar la información del usuario
            const response = await APIService(`/users/${user.id}`, "PUT", body);
            console.log("Response from API - EDIT:", response.data);
            console.log(typeof response);

            onRequestClose(); // Cierra el modal después de guardar

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
        >
            <h2>Edita tu perfil</h2>
            <form>
                <div className="form-group">
                    <label>Nombre</label>
                    <input
                        type="text"
                        name="name"
                        value={userData.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>Apellido</label>
                    <input
                        type="text"
                        name="lastname"
                        value={userData.lastname}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>Fecha de Nacimiento</label>
                    <input
                        type="date"
                        name="birthdate"
                        value={userData.birthdate}
                        onChange={handleInputChange}
                    />
                </div>

                {/* Agrega más campos de entrada según sea necesario */}
                <button onClick={handleSave}>Guardar</button>
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
