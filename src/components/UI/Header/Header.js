import React from 'react';

import Nav from "./Nav/Nav";

import sprite from "../../../assets/icons/sprite.svg";

import classes from "./Header.module.scss";



//Stateless component that displays all the nav contents

const Header = () => {

    return (
        <div className={classes.Header}>
            <div className={classes.Header__GoBack}>
                <a href="https://whenthen.com/" >
                <svg>
                <use xlinkHref={sprite + "#icon-chevron-thin-left"} />
                </svg>
                </a>
            </div>

            <Nav />
        </div>
    )
}



export default Header;