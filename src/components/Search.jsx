import React, { useState, useContext } from 'react';
import CategoryButton from './CategoryButton';
import Tags from "./Tags";

import { ItemContext } from '../context';

const Search = ({ getItem, getItemName }) => {

    const { item, fullMenu } = useContext(ItemContext);
    const [items, setItems] = item;

    const [search, setSearch] = useState("");

    const updateSearch = e => {
        setSearch(e.target.value);
    }

    // Enter Key to Search
    document.addEventListener("keyup", function (e) {
        if (e.key === "Enter") {
            getItemName(search)
        }
    })

    const Categories = ["All", "Breakfast", "MainCourse", "Snack", "Starter", "Veg", "NonVeg"];

    return (
        <main>
            <section className="search">
                <Tags getItem={getItem} fullMenu={fullMenu} />
                <div className="search-box">
                    <input onChange={updateSearch} value={search} placeholder="Search Food" type="text" />
                    <button onClick={() => getItemName(search)} type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
                </div>
                <div className="categories">
                    {Categories.map((category) => { return <CategoryButton key={category.id} getItem={getItem} tag={category} /> })}
                </div>
            </section>
        </main>
    )
}

export default Search