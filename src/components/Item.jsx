import React from 'react';

const Item = ({ itemdetails }) => {
    const { title, price, image, veg } = itemdetails;
    return (
        <main>
            <div className="item">
                <img src={image} alt="" />
                <div className="info">
                    <h1>{title}</h1>
                    <h3>Rs.{price}</h3>
                    <div>
                        {
                            (veg === true)
                                ? <img className="vegNonVegIcon" src="https://img.icons8.com/color/48/000000/vegetarian-food-symbol.png" alt="veg" />
                                : <img className="vegNonVegIcon" src="https://img.icons8.com/color/48/000000/non-vegetarian-food-symbol.png" alt="non-veg" />
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Item;