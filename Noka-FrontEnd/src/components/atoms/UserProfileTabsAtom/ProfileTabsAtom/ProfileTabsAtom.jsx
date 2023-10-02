import PropTypes from 'prop-types';
import './profileTabsAtom.css';

function ProfileTabsAtom({element_tab3, element_tab2, element_tab1}) {
    return (
      <>
        <div className="profile_tabs_container">
            <div className="tab_container">
                <div id="tab3" className="tab"> 
                    <a href="#tab3">KONTSULTAK</a>
                    <section className="tab_body_content">
                        {element_tab3}
                    </section>
                </div>
                <div id="tab2" className="tab">
                    <a href="#tab2">KALKULAGAILUA</a>
                    <section className="tab_body_content">
                        {element_tab2}
                    </section>
                </div> 
                <div id="tab1" className="tab">
                    <a href="#tab1" default>DATUAK</a>
                    <section className="tab_body_content">
                        {element_tab1}
                    </section> 
                </div> 
            </div>
        </div>      
      </>
    );
  }

  ProfileTabsAtom.propTypes = {
    element_tab3: PropTypes.element.isRequired,
    element_tab2: PropTypes.element.isRequired,
    element_tab1: PropTypes.element.isRequired,
  };
  
  export default ProfileTabsAtom;