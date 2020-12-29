import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './useStyles';

import imgAbout from '../../assets/image/about.png';

const CarouselHeader = () => {
    const classes = useStyles();

    return (
        <Grid item xs={12} className={classes.root}>
            <Grid container justify="center">
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" className={classes.title}>
                        SOBRE A RJ
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}></Grid>
                <Grid item xs={12} md={5} className={classes.text}>
                    <Typography variant="h7" spacing={2}>
                        A RJ Incorporadora e Construtora LTDA, acredita na
                        filosofia de que nenhuma empresa pode se considerar
                        grande, bem-sucedida ou experiente o bastante quando o
                        assunto é a busca pelo aprendizado e aprimoramento.
                    </Typography>
                    <br />
                    <br />
                    <Typography variant="h7">
                        Nossa missão é atender com excelência absoluta a todos
                        os clientes (pessoas ou empresas), atingindo e superando
                        as expectativas de cada um deles.
                    </Typography>
                    <br />
                    <br />
                    <Typography variant="h7">
                        Assim como qualquer construção, uma marca tem de estar
                        apoiada sobre fortes pilares: conhecimento, entusiasmo,
                        humildade, inovação, integridade, valorização das
                        pessoas e sustentabilidade. É sobre estes valores que
                        edificamos o nosso trabalho, e com base neles, buscamos
                        construir relacionamentos de longo prazo com nossos
                        clientes, fornecedores, colaboradores, parceiros e
                        acionistas.
                    </Typography>
                    <br />
                    <br />
                    <Typography variant="h7">
                        Desejamos lhe encantar com nossos produtos, por tanto
                        sinta-se a vontade em nosso site! Dúvidas e sugestões
                        serão sempre bem-vindas.
                    </Typography>
                    <br />
                    <br />
                    <Typography variant="h5" className={classes.textFinal}>
                        Desde já agradecemos a preferência!
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Typography>
                        <img
                            src={imgAbout}
                            alt="Residencial"
                            className={classes.img}
                        />
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default CarouselHeader;
