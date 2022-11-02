import React from 'react'
import { Link } from 'react-router-dom';
import classes from './Navbar.module.css'
const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <Link to='/'>Home</Link>
            </div>
            <div className={classes.item}>
                <Link to='/profile'>Profile</Link>
            </div>
            <div className={classes.item}>
                <Link to='/dialogs'>Dialogs</Link>
            </div>
            <div className={classes.item}>News</div>
            <div className={classes.item}>Music</div>
        </nav>
    )
}

export default Navbar