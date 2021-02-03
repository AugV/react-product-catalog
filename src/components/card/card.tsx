import { Card as MuiCard, CardActionArea, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
    card: {
        width: '200px',
        height: '100%',
    },
    buttonArea: {
        height: '100%',
    },
    image: {
        objectFit: 'contain'
    }
})

interface OwnProps {
    imageSrc: string;
    title: string;
    onClick: () => void;
}

const Card: React.FC<OwnProps> = (props) => {
    const { imageSrc, title, onClick } = props;
    const classes = useStyles();

    return (
        <MuiCard className={classes.card}>
            <CardActionArea onClick={onClick} className={classes.buttonArea}>
                <CardMedia
                    image={imageSrc}
                    title={title}
                    className={classes.image} 
                    component="img"
                />
                <CardContent>
                    <Typography variant="h6">
                        {title}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </MuiCard>
    )
}

export { Card }