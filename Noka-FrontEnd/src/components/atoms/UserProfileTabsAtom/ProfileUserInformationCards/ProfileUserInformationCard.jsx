import PropTypes from 'prop-types';
import './ProfileUserInformationCard.css';

function ProfileUserInformationCard({data_title, data_response}) {
    return (
    <>
        <div className='information_card_container'>
            <div>
                <h6 className='data_title'>{data_title}</h6>
                <p className='data_response'>{data_response}</p>
            </div>
        </div>
    </>
    );
  }
  
  ProfileUserInformationCard.propTypes = {
    data_title: PropTypes.string.isRequired,
    data_response: PropTypes.string.isRequired,
  };

  export default ProfileUserInformationCard;