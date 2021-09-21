import React, {useState, createContext} from 'react';
import {menu} from './data';



export const ItemContext = createContext();



export const ItemProvider = props => {


  const [items, setItems] = useState(menu);

  const fullMenu = menu;

    return (
        <ItemContext.Provider value={{item:[items, setItems], fullMenu:fullMenu}}>
            {props.children}
        </ItemContext.Provider>
    );
};
