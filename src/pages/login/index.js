import React from 'react';
import { Grid } from '@material-ui/core';
import Login from '../../components/login';

export default function Home() {
    return (
        <Grid item xs={12}>
            <Grid container justify="center">
                <Grid item xs={12} md={6}>
                    <Login />
                </Grid>
            </Grid>
        </Grid>
    );
}
