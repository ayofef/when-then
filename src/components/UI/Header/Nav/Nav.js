import React from 'react';

import sprite from "../../../../assets/icons/sprite.svg";
import face from "../../../../assets/images/face.jpg";


import classes from "./Nav.module.scss";



//Staleless component that displays navigation items at the top right corner
// User's avatar should have been passed in as props but link was broken

const Nav = () => {

    return (
        <nav className={classes.Nav}>
            <ul>
                <li>
                    <i className={classes.Nav__DonerMenu}></i>
                </li>
            </ul>

            <ul>
                <li>
                    <a href="https://whenthen.com/" >
                    <img src={face} alt=" by Alexander Krivitskiy - Unsplash"/>
                    </a>
                </li>
                <li>
                    <a href="https://whenthen.com/" >
                    <img src={face} alt=" by Alexander Krivitskiy - Unsplash"/>
                    </a>
                </li>
                <li>
                    <a href="https://whenthen.com/" >
                    <img src={face} alt=" by Alexander Krivitskiy - Unsplash"/>
                    </a>
                </li>
                <li>
                    <a href="https://whenthen.com/" >
                    <svg>
                    <use xlinkHref={sprite + "#icon-person_add"} />
                    </svg>
                    </a>
                </li>
                
            </ul>

            <ul>
                <li>
                    <a href="https://whenthen.com/" >
                    <svg>
                    <use xlinkHref={sprite + "#icon-share-alternitive"} />
                    </svg>
                    </a>
                </li>
            </ul>

            <ul>
                <li>
                    <a href="https://whenthen.com/" >
                    <svg>
                    <use xlinkHref={sprite + "#icon-dots-three-horizontal"} />
                    </svg>
                    </a>
                </li>
            </ul>
            

        </nav>
    )
}



export default Nav;