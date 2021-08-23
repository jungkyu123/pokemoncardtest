import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';

const SpecificCard = ({ card }) => {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={card.image} title={card.name} />
            <CardContent>
                <div className={classes.cardContentName}>
                    <Typography variant="h6" gutterBottom>
                        {card.name}
                    </Typography>
                </div>
                <div className={classes.cardContentPrice}>
                    <Typography variant="h6">
                        {card.price} <span className={classes.dot}>・</span> 20 cards
                    </Typography>
                </div>
            </CardContent>

            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to Cart" className={classes.cartButton}>
                    <AddShoppingCart />
                    Add to cart
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default SpecificCard;
