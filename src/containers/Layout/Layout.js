import React from 'react';

import Blurb from "../../components/Blurb/Blurb";
import Masory from "../Masory/Masory";

import classes from "./Layout.module.scss";

const Layout = () => {


    return(
        <main className={classes.Layout}>
            <Blurb />
            <Masory />
        </main>
    )
}


export default Layout;