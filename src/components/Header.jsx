import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles'
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import Links from './Links';

const useStyles = makeStyles((theme) => ({
    togglebtnStyles: {
        textDecoration: 'none',
    },
    typographyStyles: {
        flex: 1,
    }
}));

function Header() {

    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>
                    <MenuIcon/>
                    <Typography className={classes.typographyStyles} variant="h6">
                        Header
                    </Typography>
                    <Links/>
                    {/* <Typography className={classes.typographyStyles} variant="h6">
                        Header Header Header Header Header
                    </Typography> */}
                    
                    <SearchIcon />
                    <AccountCircleIcon />
            </Toolbar>
        </AppBar>
    )
}

export default Header
