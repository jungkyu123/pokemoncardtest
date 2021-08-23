import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography, InputBase } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './styles';
import logo from '../../assets/pokemonBall.svg';

function Navbar() {

    const classes = useStyles();

    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit" >
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="Pokemon Card Market" height="25px" width="30px" className={classes.image} />
                        Pokemon Market
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton type="submit" className={classes.searchIcon} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                        <InputBase className={classes.inputInput} placeholder="Search by Name" inputProps={{ 'aria-label': 'search by name' }} />

                        <IconButton aria-label="show cart items" color="inherit">
                            <Badge badgeContent={2} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;
