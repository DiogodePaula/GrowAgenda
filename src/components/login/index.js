import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import * as loginActions from '../../store/login/action';
import api from '../../services/api';

import { useStyles } from './useStyles';
// import logo from '../../assets/image/logo-dark.png';

export default function CarouselHeader() {
    const classes = useStyles();
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState('');

    const dispatch = useDispatch();

    async function handleLogin() {
        try {
            const response = await api.post('/login', {
                login,
                password,
            });
            const userType = response?.data?.user?.type;
            const isGrowdever = response?.data?.user?.growdever;

            if (
                response?.data?.token &&
                (isGrowdever !== null || userType === 'Admin')
            ) {
                dispatch(loginActions.login(response.data));
            }
        } catch (error) {
            alert('error ao tentar logar');
        }
    }

    return (
        <Grid item xs={12} className={classes.root}>
            <Grid container justify="center">
                <Grid item xs={12} md={6}>
                    <div>
                        <picture
                            className="col-12"
                            style={{ textAlign: 'center', marginTop: '2em' }}
                        >
                            {/* <img src={logo} alt="Growdev" className="" /> */}
                        </picture>

                        <Typography for="examplePassword">login</Typography>
                        <TextField
                            type="text"
                            value={login}
                            placeholder="login"
                            style={{ width: '100%' }}
                            onChange={(e) => setLogin(e.target.value)}
                        />

                        <Typography for="examplelogin">Password</Typography>
                        <TextField
                            type="password"
                            value={password}
                            placeholder="password"
                            style={{ width: '100%' }}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <Button onClick={handleLogin}>Login</Button>
                        <Link to="/register" style={{ float: 'right' }}>
                            <Button>Criar conta</Button>
                        </Link>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    );
}
