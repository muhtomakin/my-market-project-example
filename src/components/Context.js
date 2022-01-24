import React, { useState, useContext, useCallback } from 'react';
import Data from './Data';

const AppContext = React.createContext();

const MyContext = ({ children }) => {

    const [items, setItems] = useState(Data);
    const [searchItem, setSearchItem] = useState('');
    
    const filteredItem = useCallback((e) => {
        const keyword = e.target.value;
        if (keyword !== '') {
            const results = items.filter((item) => {
                return item.title.toLowerCase().startsWith(keyword.toLowerCase());
            });
            setItems(results);
        }else {
            setItems(Data);
        }
        setSearchItem(keyword);
    });
    

    return (
        <AppContext.Provider
          value={{
            items,
            searchItem,
            setSearchItem,
            filteredItem
          }}
        >
          {children}
        </AppContext.Provider>
      );
}

export const useGlobalContext = () => {
    return useContext(AppContext);
  };
  
  export { AppContext, MyContext };

