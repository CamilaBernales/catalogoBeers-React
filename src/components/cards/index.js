import React, { useContext } from 'react'
import { BeersContext } from '../../context'
import { Card, CardContent, CardMedia, Typography, Grid, StylesProvider } from '@material-ui/core';
import styles from './Cards.module.css';


const Cards = () => {

    const { beers } = useContext(BeersContext);
    // console.log({beers});

    return (

        <div className={styles.container}>

            <Grid
                continainer
                justify='center'
                direction="row"
                container
                alignItems="center"
            >

                {beers.map(beer => (
                    <Grid item xs={15} md={3} component={Card} className={styles.card}>
                        <CardContent>
                            <img className={styles.imagen} src={beer.image_url} />
                            <Typography align="center" variant="h5" color='secondary'>{beer.name}</Typography>
                        </CardContent>
                    </Grid>

                ))}

            </Grid>
        </div>
    )
}

export default Cards;