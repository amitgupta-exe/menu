import React, { useState, useContext } from 'react';
import CategoryButton from './CategoryButton';


const Search = ({ getItem, getItemName }) => {

    const [search, setSearch] = useState("");

    const updateSearch = e => {
        setSearch(e.target.value);
    }

    document.addEventListener("keyup", function (e) {
        if (e.key === "Enter") {
            getItemName(search)
        }
    })

    const Categories = ["All","Breakfast","MainCourse", "Snack", "Starter","Veg", "NonVeg" ]


    return (
        <main>
            <section className="search">
                <div className="search-box">
                    <input onChange={updateSearch} value={search} placeholder="Search Food" type="text" />
                    <button onClick={() => getItemName(search)} type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
                </div>
                <div className="categories">
                    {Categories.map((category)=>{return <CategoryButton getItem={getItem} tag={category}  />}) }
                    
                </div>
            </section>
        </main>
    )
}

export default Search