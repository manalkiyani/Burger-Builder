import React from "react";

import classes from './Toolbar.module.css';
import Logo from "../Logo/Logo";
import NavigationItems from "../Navigation/NavigationItems/NavigationItems";
import Menu from "./Menu/Menu";

const toolbar = props =>(
    <header className={classes.Toolbar}>
        <Menu 
        clicked={props.toggle}
        
        ></Menu>
        
       <Logo height="80%"/>
        <nav>
            <NavigationItems/>
        </nav>
    </header>
);
export default toolbar;