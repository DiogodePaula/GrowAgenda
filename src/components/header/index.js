import React from 'react';
import { useSelector } from 'react-redux';
import { HashLink as Link2 } from 'react-router-hash-link';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';

import { Grid, Menu } from '@material-ui/core';
import { useStyles } from './useStyles';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuItem from '@material-ui/core/MenuItem';
import { Link as TextLink } from '@material-ui/core';
// import api from '../../services/api';
// import * as typesActions from '../../store/modules/types/actions';

// import imgCarousel from '../../assets/image/img-carousel.png';
// import imgCarousel2 from '../../assets/image/img-carousel-2.png';
// import logo from '../../assets/image/logo.png';

// const items = [
//     {
//         url: imgCarousel,
//     },
//     {
//         url: imgCarousel2,
//     },
// ];

const CarouselHeader = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const types = useSelector((state) => state.types);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Grid item className={classes.root2} container>
            <Grid container className={classes.grid}>
                <Grid item xs={12}>
                    <div className={classes.paper}>
                        <ul className={classes.ul}>
                            <Link to="/">
                                {/* <img
                                    src={logo}
                                    className={classes.logo}
                                    alt="logo"
                                /> */}
                            </Link>

                            <li>
                                <Link to="/" className={classes.link}>
                                    {' '}
                                    HOME{' '}
                                </Link>
                            </li>
                            <li>
                                <Link to="/about-us" className={classes.link}>
                                    {' '}
                                    SOBRE NÓS{' '}
                                </Link>
                            </li>
                            <li>
                                <Typography
                                    aria-controls="simple-menu"
                                    className={classes.link}
                                    aria-haspopup="true"
                                    onClick={handleClick}
                                >
                                    EMPREENDIMENTOS
                                </Typography>
                                <Menu
                                    id="simple-menu"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    {types.map((type) => {
                                        <Link
                                            to={{
                                                pathname: '/empreendimentos',
                                                type: type,
                                            }}
                                            className={classes.link2}
                                        >
                                            <MenuItem onClick={handleClose}>
                                                EMPREENDIMENTOS{' '}
                                                {type.name.toUpperCase()}
                                            </MenuItem>
                                            ;
                                        </Link>;
                                    })}
                                </Menu>
                            </li>
                            <li>
                                <Link2
                                    to="#form-contact"
                                    className={classes.link}
                                >
                                    {' '}
                                    CONTATOS{' '}
                                </Link2>
                            </li>
                        </ul>
                    </div>

                    <div className={classes.menumobile}>
                        <AppBar
                            position="absolute"
                            className={clsx(classes.appBar, {
                                [classes.appBarShift]: open,
                            })}
                            style={{ boxShadow: 'none' }}
                        >
                            <Toolbar>
                                <Typography
                                    variant="h6"
                                    noWrap
                                    className={classes.title}
                                ></Typography>
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    edge="end"
                                    style={{ margin: '5px 5px 0 0' }}
                                    onClick={handleDrawerOpen}
                                    justify="flex-end"
                                    className={clsx(open && classes.hide)}
                                >
                                    <MenuIcon
                                        className={classes.menuHamburguer}
                                    />
                                </IconButton>
                            </Toolbar>
                        </AppBar>
                        <Drawer
                            className={classes.drawer}
                            variant="persistent"
                            anchor="right"
                            open={open}
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                        >
                            <div className={classes.drawerHeader}>
                                <IconButton onClick={handleDrawerClose}>
                                    {theme.direction === 'rtl' ? (
                                        <ChevronLeftIcon />
                                    ) : (
                                        <ChevronRightIcon
                                            className={classes.iconMobileClose}
                                        />
                                    )}
                                </IconButton>
                            </div>
                            <Divider />
                            <List>
                                <ul className={classes.ulMobile}>
                                    <li className={classes.liMobile}>
                                        <Link
                                            to="/"
                                            onClick={handleDrawerClose}
                                            style={{
                                                textDecoration: 'none',
                                                color: '#F57F45',
                                            }}
                                        >
                                            HOME
                                        </Link>
                                    </li>
                                    <li className={classes.liMobile}>
                                        <Link
                                            to="/about-us"
                                            onClick={handleDrawerClose}
                                            style={{
                                                textDecoration: 'none',
                                                color: '#F57F45',
                                            }}
                                        >
                                            SOBRE NÓS
                                        </Link>
                                    </li>
                                    <li className={classes.liMobile}>
                                        <Typography className={classes.link}>
                                            <TextLink
                                                aria-controls="simple-menu"
                                                aria-haspopup="true"
                                                onClick={handleClick}
                                                href="#"
                                            >
                                                EMPREENDIMENTOS
                                            </TextLink>
                                        </Typography>
                                        <Menu
                                            id="simple-menu"
                                            anchorEl={anchorEl}
                                            keepMounted
                                            open={Boolean(anchorEl)}
                                            onClose={handleClose}
                                        >
                                            {types.map((type) => (
                                                <Link
                                                    to={{
                                                        pathname:
                                                            '/empreendimentos',
                                                        type: type,
                                                    }}
                                                    className={classes.link2}
                                                    onclick={() => handleClose}
                                                    key={type.uid}
                                                >
                                                    <MenuItem>
                                                        EMPREENDIMENTOS{' '}
                                                        {type.name.toUpperCase()}
                                                    </MenuItem>
                                                </Link>
                                            ))}
                                        </Menu>
                                    </li>
                                    <li className={classes.liMobile}>
                                        <Link
                                            to="/contact"
                                            onClick={handleDrawerClose}
                                            style={{
                                                textDecoration: 'none',
                                                color: '#F57F45',
                                            }}
                                        >
                                            CONTATOS
                                        </Link>
                                    </li>
                                </ul>
                            </List>
                            <Divider />
                        </Drawer>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default CarouselHeader;
