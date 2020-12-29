import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { useStyles } from './useStyles';
// import logo from '../../assets/image/logo-rj-incorporacoes.png';
// import iconFacebook from '../../assets/image/facebook.svg';
// import iconInstagram from '../../assets/image/instagram.svg';

export default function Footer() {
    const classes = useStyles();

    return (
        <Grid item xs={12} className={classes.root}>
            <Grid container className={classes.margin} justify="center">
                <Grid item xs={12} sm={6}>
                    <Typography>{/* <img src={logo} alt="RJ" /> */}</Typography>
                </Grid>
                <Grid item xs={12} sm={6} className={classes.iconSociais}>
                    <Typography variant="h1" className={classes.iconSociaisBox}>
                        <a
                            href="https://www.facebook.com/rjincorporacoes"
                            // eslint-disable-next-line react/jsx-no-target-blank
                            target="_blank"
                        >
                            {/* <img src={iconFacebook} width="27" alt="Facebook" /> */}
                        </a>
                        <a
                            href="https://www.instagram.com/rjincorporacoes/"
                            // eslint-disable-next-line react/jsx-no-target-blank
                            target="_blank"
                        >
                            {/* <img
                                src={iconInstagram}
                                width="47"
                                alt="Instagram"
                                className={classes.instaIcon}
                            /> */}
                        </a>
                    </Typography>
                </Grid>
                <Grid item xs={12} className={classes.copyright}>
                    <Typography>
                        2020 - Todos os direitos reservados - Rj Comércio de
                        Imóveis
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}
