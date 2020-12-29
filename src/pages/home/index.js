import React from 'react';
import { Grid } from '@material-ui/core';
import Contact from '../../components/contact';
import ContactUs from '../../components/contactUs';
import PropertyCarousel from '../../components/carouselProperty';

export default function Home() {
    return (
        <Grid item xs={12}>
            <Grid container>
                <Grid item xs={12}>
                    <PropertyCarousel />
                </Grid>

                <ContactUs />

                <Contact />
            </Grid>
        </Grid>
    );
}
