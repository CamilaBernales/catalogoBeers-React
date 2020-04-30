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
                container
                justify='center'
                direction="row"
                alignItems="center"
            >

                {beers.map(beer => (
                    <Grid item xs={15} md={3} component={Card} className={styles.card}>
                        <CardMedia
                            className={styles.imagen}
                            component="img"
                            alt="beer"
                            image={beer.image_url}
                            title="beer"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {beer.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {beer.description}
                            </Typography>
                        </CardContent>
                    </Grid>

                ))}

            </Grid>
        </div>
    )
}

export default Cards;