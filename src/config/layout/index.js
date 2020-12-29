import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Header from '../../components/header';
import Footer from '../../components/footer';

import { useStyles } from './useStyles';

export default function Layout({ children }) {
    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Header />
            {children}
            <Footer />
        </Grid>
    );
}

Layout.propTypes = {
    children: PropTypes.element.isRequired,
};
