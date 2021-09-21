import React, { useState, useContext } from 'react';


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


    return (
        <main>
            <section className="search">
                <div className="search-box">
                    <input onChange={updateSearch} value={search} placeholder="Search Food" type="text" />
                    <button onClick={() => getItemName(search)} type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
                </div>
                <div className="categories">
                    <button onClick={() => getItem("all")}>All</button>
                    <button onClick={() => getItem("breakfast")}>Breakfast</button>
                    <button onClick={() => getItem("lunch")}>Main-Course</button>
                    <button onClick={() => getItem("snack")}>Snacks</button>
                    <button onClick={() => getItem("starter")}>Starter</button>
                    <button onClick={() => getItem("veg")}>Veg</button>
                    <button onClick={() => getItem("nonVeg")}>Nonveg</button>
                </div>
            </section>
        </main>
    )
}

export default Search