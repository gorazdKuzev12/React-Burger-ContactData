

import React from 'react'
import Aux from '../../hoc/Aux1';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
const layout = (props) => (
    <Aux>
        <Toolbar/>
        <SideDrawer/>
    <div>Toolbar,SideDrawer,BackDrop</div>
    <main className={classes.Content}>
        {props.children}
    </main>
    </Aux>
)

export default layout;