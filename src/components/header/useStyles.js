import { fade, makeStyles } from '@material-ui/core/styles';
const drawerWidth = 240;

import 'typeface-mr-dafoe';

export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    grid: {
        position: 'absolute',
        zIndex: '100',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
        },
    },
    displayNone: {
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    },
    rightside: {
        display: 'flex',
        padding: theme.spacing(2),
        textAlign: 'center',
        alignItems: 'center',

        justifyContent: 'flex-end',
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    },
    paper: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        padding: theme.spacing(1),
        textAlign: 'center',
        alignItems: 'start',
    },
    ul: {
        marginRight: '6em',
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'start',
        fontSize: '1.2em',
        fontWeight: '400',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
        padding: '0 10px',
        width: '100%',
    },
    link: {
        textDecoration: 'none',
        margin: '0 20px',
        color: '#ffffff',
        '&:hover': {
            color: '#FF792C',
        },
    },
    link2: {
        textDecoration: 'none',
        // margin: '0 20px',
        color: '#707070',
        '&:hover': {
            color: '#FF792C',
        },
    },
    button: {
        display: 'block',
        marginTop: theme.spacing(2),
    },
    inputLabel: {
        color: '#ffffff',
        [theme.breakpoints.down('xs')]: {
            color: '#FF792C',
            fontSize: '0.84em',
            fontWeight: '600',
            marginRight: '20px',
        },
    },
    menuNav: {
        display: 'flex',
    },
    logo: {
        height: '150px',
        marginRight: '50px',
        [theme.breakpoints.down('xs')]: {
            height: '50px',
            margin: '0 auto',
        },
    },
    lupa: {
        margin: '0',
        height: '30px',
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    },
    lupamobile: {
        height: '40px',
    },
    btnAdvertise: {
        backgroundColor: '#28e18e',
        color: 'white',
        marginLeft: '10px',
        padding: '1rem 1rem',
        textTransform: 'none',
        borderRadius: '5px',
        borderStyle: 'none',
        fontSize: '12pt',
        fontWeight: 'bold',
        [theme.breakpoints.down('xs')]: {
            display: 'none',
            width: '90vw',
            fontSize: '16pt',
            margin: 'auto',
        },
    },
    menumobile: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            width: '90vw',
            marginTop: '1rem',
            padding: '10px',
            justifyContent: 'space-evenly',
            alignItems: 'center',
        },
    },
    menu_mobile_inside: {
        fontSize: '18pt',
    },
    linkMobile: {
        textDecoration: 'none',
        color: 'black',
    },
    btn_menu_mobile: {
        backgroundColor: '#F57F45',
        color: '#F57F45',
        fontSize: '14pt',
        padding: '8px 30px',
        textTransform: 'none',
        fontWeight: 'bold',
    },
    root2: {
        display: 'flex',
    },
    menuHamburguer: {
        fontSize: '2em',
        color: '#FFFFFF',
    },
    appBar: {
        background: 'none !important',
        position: 'fixed',
        top: '0',
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
    },
    title: {
        flexGrow: 1,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginRight: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
    },
    ulMobileSearch: {
        paddingLeft: '10px',
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        color: '#FFFFFF',
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
        [theme.breakpoints.down('sm')]: {
            color: '#707070',
            borderBottom: '2px solid #F57F45',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
        [theme.breakpoints.down('sm')]: {
            color: '#707070',
            fontSize: '1.5em',
        },
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
        [theme.breakpoints.down('sm')]: {
            color: '#707070',
            fontSize: '1.5em',
        },
    },
    iconMobileClose: {
        fontSize: '2.2em',
        fontWeight: '900',
        color: '#F57F45',
    },
    ulMobile: {
        display: 'flex',
        justifySelf: 'center',
        flexDirection: 'column',
        paddingLeft: '0',
    },
    liMobile: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: '1.5em',
        fontWeight: '600',
        padding: '20px 0px',
        textAlign: 'center',
    },
    carousel: {
        position: 'relative',
        // marginBottom: '-3em',
        // '&::before': {
        //     marginBottom: '-3em',
        // },
    },
    txtCarousel: {
        position: 'absolute',
        top: '200px',
        left: '18%',
        [theme.breakpoints.down('sm')]: {
            left: '20%',
        },
        [theme.breakpoints.down('xs')]: {
            textAlign: 'center',
            left: '7%',
        },
    },
    txtCarouselTypography: {
        color: '#ffffff',
        fontSize: '3.5em !important',
        fontWeight: '900 !important',
        height: '30px',
        [theme.breakpoints.down('xs')]: {
            fontSize: '3em',
        },
    },
    txtCarouselTypography2: {
        fontFamily: 'Mr Dafoe !important',
        fontSize: '7em !important',
        fontWeight: '500 !important',
        color: '#FF5F23 !important',
        height: '100px !important',
        // transform: 'scaleY(1.5) skewY(-5deg)',
        [theme.breakpoints.down('xs')]: {
            fontSize: '5em !important',
            height: '70px !important',
        },
    },
    txtCarouselTypography3: {
        color: '#ffffff',
        fontSize: '3.5em !important',
        fontWeight: '900 !important',
        height: '10px !important',
        [theme.breakpoints.down('xs')]: {
            fontSize: '3em',
        },
    },
    imgCarousel: {
        [theme.breakpoints.down('xs')]: {
            // marginLeft: '5em',
        },
    },
}));
