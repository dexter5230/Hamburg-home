import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import classes from './FilterMeals.module.css';
const FilterMeals = (props) => {


    const inputChangeHandler = (e) => {
        const keyword = (e.target.value.trim());
        props.onFilter(keyword);
    }

    return (
        <div className={classes.FilterMeals}>
            <div className={classes.InputOuter}>
                <input className={classes.Input} onChange={inputChangeHandler}  type="text" placeholder="Key word please"/>
                <FontAwesomeIcon className={classes.SearchIcon} icon={faSearch}/>
            </div>

        </div>
    );
};

export default FilterMeals;