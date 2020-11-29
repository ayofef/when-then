import React from 'react';

import classes from "./Footer.module.scss";

import sprite from "../../../assets/icons/sprite.svg";

const Footer  = () => {

    return (
        <footer className={classes.Container}>
            <div className={classes.Footer}>
                <div className={classes.Footer__Left}>
                
                <div>
                    <svg>
                    <use xlinkHref={sprite + "#icon-magnifying-glass"} />
                    </svg>
                </div>

                <div>
                    <svg>
                    <use xlinkHref={sprite + "#icon-grid"} />
                    </svg>
                </div>

                <div  className={classes.Footer__Left___Notification}>
                    <svg>
                    <use xlinkHref={sprite + "#icon-bell"} />
                    </svg>
                    <p>1</p>
                </div>

            </div>
            <div className={classes.Footer__Right}>
                <div>
                    <svg>
                    <use xlinkHref={sprite + "#icon-squared-plus"} />
                    </svg>
                </div>
            </div>
            </div>
        </footer>
    )
}


export default Footer;