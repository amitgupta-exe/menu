import React from 'react';
import CategoryButton from './CategoryButton';
import $ from 'jquery'


import _ from 'underscore';

const Tags = ({ fullMenu, getItem }) => {

    var tags = [];

    for (let i = 0; i < fullMenu.length; i++) {
        tags[i] = fullMenu[i].tags;
    }

    var merged = [].concat.apply([], tags);

    const tagsArray = _.uniq(merged, false);

    //Function to Toggle the Appearance of Tags, Hamburger-Icon,etc

    const showHideTags = () => {
        if ($(".all-tags-container").hasClass("hideTags") === true) {
            ($(".all-tags-container").removeClass("hideTags").addClass("showTags"));
            ($(".fas").removeClass("fa-bars").addClass("fa-times"));
            ($(".searchMoreTags").removeClass("show").addClass("hide")); 
        }
        else {
            ($(".all-tags-container").removeClass("showTags").addClass("hideTags"));
            ($(".fas").removeClass("fa-times").addClass("fa-bars"));
            ($(".searchMoreTags").removeClass("hide").addClass("show"));
        }
    }

    return (
        <main>
            <div onClick={showHideTags} className="tags-icon">
                <i className="fas fa-bars"></i>
                <p className="searchMoreTags show">Search More Tags</p>
            </div>
            <div className="all-tags-container  hideTags">
                <div className="all-tags">
                    {tagsArray.map((tag) => { return <CategoryButton key={tag.id} getItem={getItem} tag={tag} /> })}
                </div>
            </div>
        </main>
    )
}

export default Tags
