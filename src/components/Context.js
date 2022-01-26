import React, { useState, useContext, useCallback } from 'react';
import Data from './Data';

const AppContext = React.createContext();

const MyContext = ({ children }) => {

    const [items, setItems] = useState(Data);
    const [searchItem, setSearchItem] = useState('');
    const [cartItems, setCartItems] = useState([]);

    const onAdd = (product) => {
      const exist = cartItems.find(item => item.id === product.id);
      if (exist) {
        setCartItems(cartItems.map((item) => item.id === product.id ? {...exist, amount: exist.amount+1} : item));
      }else {
        setCartItems([...cartItems, {product, amount: 1}]);
      }
    };

    const onRemove = (product) => {
      const exist = cartItems.find(item => item.id === product.id);
      if (exist.amount === 1) {
        setCartItems(cartItems.filter((item) => item.id !== product.id));
      }else {
        setCartItems(cartItems.map((item) => item.id === product.id ? {...exist, amount: exist.amount-1} : item));
      }
    };

    const remove = (product) => {
      const exist = cartItems.find(item => item.id === product.id);
      setCartItems(cartItems.map((item) => item.id !== product.id));
    }

    const itemPrice = cartItems.reduce((a,c) => a+c.amount*c.price, 0);
    const totalPrice = itemPrice;
    
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
            filteredItem,
            onAdd,
            onRemove,
            remove,
            itemPrice,
            totalPrice,
            cartItems
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

