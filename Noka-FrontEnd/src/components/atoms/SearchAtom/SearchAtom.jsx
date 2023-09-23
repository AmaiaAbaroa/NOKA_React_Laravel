import "./searchAtom.css";
import searchIcon from '../../../assets/icons/search_icon.svg'


const SearchAtom = () => {
    return (
      <>
              <div className='search_container'>
                <input className="search_input" type="search" id="search" placeholder='Bilatu...'></input>
                <img className="search_icon" src={searchIcon} alt="Bilatu irudia"/>
              </div>

      </>
    );
  };
  
  
  export default SearchAtom;