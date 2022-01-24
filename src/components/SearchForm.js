import React, {useEffect, useRef} from 'react';
import { useGlobalContext } from './Context'

const SearchForm = () => {
    
    const {searchItem, setSearchItem, filteredItem} = useGlobalContext();

    return (
        <section className='section search'>
            <form className='search-form'>
                <div className='form-control'>
                    <label htmlFor='name'>search your favorite cocktail</label>
                    <input 
                        type='search'
                        onChange={filteredItem}
                    />
                </div>
            </form>
        </section>
    );
}

export default SearchForm;
