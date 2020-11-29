import React from 'react';

import classes from "./Blurb.module.scss";



//Stateless component that displays the Heading and descriptive text.
//Since our content(text) is constant(not coming from a cms), It is safe to put the text directly into the JSX Elements

const Blurb = () => {

    return(
        <div className={classes.Blurb}>
            <h1 className={classes.Blurb__Heading}>
            Candy cotton candy sesame snaps biscuit
            </h1>
            <p className={classes.Blurb__Paragraph}>
            Candy cotton candy sesame <span className={classes.Blurb__Paragraph___Hash}>#Design</span> <span className={classes.Blurb__Paragraph___Hash}>#HR</span> snaps biscuit dessert topping halvah marshmallow gummies. Pie toffee chocolate toffee biscuit. Icing chocolate cake ice cream jelly beans chocolate cake souffle candy.
            </p>
        </div>
    )
}


export default Blurb;