import './searchFilterMolecule.css';
import filterIcon from '../../../assets/icons/filter_icon.svg'
import SearchAtom from '../../atoms/SearchAtom/SearchAtom';


const SearchFilterMolecule = () => {
    return (
      <>
          <section className='search_filer_section_container'>
              <div className='search_filter_container'>
                      <button className='filter_icon_container'>
                          <img src={filterIcon} className="filter_icon" alt="Filtro irudia"/>
                      <div className='filter_notification'>
                      </div>
                      </button>
                  <SearchAtom></SearchAtom>
              </div>
          </section>
      </>
    );
  };
  
  
  export default SearchFilterMolecule;