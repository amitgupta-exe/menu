import React, { useContext } from 'react';

//Components
import Item from './Item';

//Context
import { ItemContext } from '../context';


//App Function
const Items = () => {

    //Context
    const { item } = useContext(ItemContext);
    const [items, setItems] = item;


    //APP
    return (
        <div className="items-grid">
            {items.map((item) => {
                return <Item key={item.id} itemdetails={item} />
            })}
        </div>
    )
}

export default Items