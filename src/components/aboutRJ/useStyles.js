import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        margin: '2.5em 0',
        backgroundColor: '#EFEFEF',
    },
    title: {
        color: '#FF792C',
        fontWeight: '900',
        marginLeft: '3.5em',
        [theme.breakpoints.down('xs')]: {
            marginLeft: '0.5em',
        },
        [theme.breakpoints.down('md')]: {
            marginLeft: '1em',
        },
    },
    text: {
        margin: '2.5em 1em 0 0',
        paddingRight: '2em',
        color: '#707070',
        fontSize: '1.5em',
        [theme.breakpoints.down('xs')]: {
            marginLeft: '0.5em',
        },
        [theme.breakpoints.down('md')]: {
            marginLeft: '2em',
        },
    },
    textFinal: {
        fontWeight: '600',
    },
    img: {
        marginTop: '2em',
        width: '100%',
    },
}));
