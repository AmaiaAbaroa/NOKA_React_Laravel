import { useState } from "react";
import './searchFilterMolecule.css';
import filterIcon from '../../../assets/icons/filter_icon.svg';
import searchIcon from '../../../assets/icons/search_icon.svg';
import SearchAtom from '../../atoms/SearchAtom/SearchAtom';
import closeIcon from '../../../assets/icons/close_icon.svg';


const SearchFilterMolecule = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState(""); 
    const [selectedFromDate, setSelectedFromDate] = useState(""); 
    const [selectedToDate, setSelectedToDate] = useState(""); 
    const [selectedOptions, setSelectedOptions] = useState([]); 

    const toggleFilter = () => {
        setIsFilterOpen(!isFilterOpen);
    };

    const handleFilterSelect = (option) => {
        setSelectedFilter(option);

        setSelectedOptions([...selectedOptions, option]);
    };

    const handleFromDateChange = (e) => {
        setSelectedFromDate(e.target.value);
    };

    const handleToDateChange = (e) => {
        setSelectedToDate(e.target.value);
    };

    const removeOption = (option) => {

        const updatedOptions = selectedOptions.filter((selectedOption) => selectedOption !== option);
        setSelectedOptions(updatedOptions);
    };

    const completeSelection = () => {
        setIsFilterOpen(false); 
    };

    return (
        <>
            <section className='search_filter_section_container'>
                <div className='search_filter_container'>
                    <button className='filter_icon_container' onClick={toggleFilter}>
                        <img src={filterIcon} className="filter_icon" alt="Filtro irudia"/>
                    </button>
                    <SearchAtom></SearchAtom>
                </div>
                {isFilterOpen && (
                    <div className='filter_dropdown'>
                        <select
                            id="labels"
                            name='question_labels'
                            onChange={(e) => handleFilterSelect(e.target.value)}
                        >
                            <option value="" disabled selected hidden>Etiketak</option>
                            <option value="Nominak">Nominak</option>
                            <option value="Jubilazioa">Jubilazioa</option>
                            <option value="Zerbitzu Eginkizunak">Zerbitzu Eginkizunak</option>
                            <option value="Zerrenda irekiera">Zerrenda irekiera</option>
                            <option value="Birbaremazioak">Birbaremazioak</option>
                            <option value="IKHA Esleipenak">IKHA Esleipenak</option>
                            <option value="Ordezkagunea">Ordezkagunea</option>
                            <option value="EPE-ak">EPE-ak</option>
                            <option value="Lekualdatze L.">Lekualdatze L.</option>
                        </select>
                        <label className="search_data_label">Nondik:</label>
                        <input
                            type="date"
                            id="fromDate"
                            name="fromDate"
                            value={selectedFromDate}
                            onChange={handleFromDateChange}
                        />
                        <label className="search_data_label">Nora:</label>
                        <input
                            type="date"
                            id="toDate"
                            name="toDate"
                            value={selectedToDate}
                            onChange={handleToDateChange}
                        />
                        <button className="search_selected_button" onClick={completeSelection}><img src={searchIcon}/></button>
                    </div>
                )}
                {selectedOptions.length > 0 && (
                    <div>
                        <div className='data_selection_container'>
                            {selectedFromDate && (
                                <div className='selected_data_container'>
                                    <label className="search_data_label">Nondik:</label>
                                    <div className="selected_data">
                                        {selectedFromDate}
                                    </div>
                                </div>
                            )}
                            
                            {selectedToDate && (
                                <div className='selected_data_container'>
                                    <label className="search_data_label">Nora:</label>
                                    <div className="selected_data">
                                        {selectedToDate}
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className='labels_selection_container'>
                            {selectedOptions.map((option, index) => (
                                <div key={index} className='selected_option'>
                                    {option}
                                    <button className="remove_selected_label" type="button" onClick={() => removeOption(option)}>
                                        <img src={closeIcon} alt="Ezabatu irudia" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </section>
        </>
    );
};

export default SearchFilterMolecule;
