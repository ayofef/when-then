import React from 'react';

import Nav from "./Nav/Nav";

import sprite from "../../../assets/icons/sprite.svg";

import classes from "./Header.module.scss";



//Stateless component that displays all the nav contents

const Header = () => {

    return (
        <div className={classes.Header}>
            <div className={classes.Header__GoBack}>
                <svg>
                <use xlinkHref={sprite + "#icon-chevron-thin-left"} />
                </svg>
            </div>

            <Nav />
        </div>
    )
}



export default Header;