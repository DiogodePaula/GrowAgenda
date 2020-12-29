import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        background: '#FF792C',
        color: '#FFFFFF',
        textAlign: 'center',
        overflowX: 'hidden',
        overflowY: 'hidden',
    },
    iconSociais: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '1.5em',
        marginBottom: '1em',
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'center',
        },
    },
    iconSociaisBox: {
        marginLeft: '0.3em',
        [theme.breakpoints.down('xs')]: {
            marginLeft: '0',
        },
    },
    copyright: {
        borderTop: '1px solid #ffffff',
    },
    instaIcon: {
        marginLeft: '1em',
    },
}));
