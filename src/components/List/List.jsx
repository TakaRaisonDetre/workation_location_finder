import React, { useState } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import useStyles from './styles'

import PlaceDetails from '../PlaceDetails/PlaceDetails'


const List = () => {
    const classes = useStyles();
    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('');

    const places = [
        { name: 'cool place' },
        { name: 'nice place' },
        { name: 'neat place' },
        { name: 'cool place' },
        { name: 'nice place' },
        { name: 'neat place' }


    ]

    return (
        <div className={classes.container}>
            <Typography varient="h4">
                ワーケーション、レストラン、アトラクション
            </Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value="restaurants">restaurants</MenuItem>
                    <MenuItem value="workation">hotels</MenuItem>
                    <MenuItem value="attraction">attraction</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel>Rating</InputLabel>
                <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={3}>above 3.0</MenuItem>
                    <MenuItem value={4}>above 4.0</MenuItem>
                    <MenuItem value={4.5}>above 4.5</MenuItem>
                </Select>
            </FormControl>
            <Grid cotainer spacing={3} className={classes.list}>
                {places?.map((place, index) => (
                    <Grid item key={index} xs={12}>
                        <PlaceDetails place={place} />
                    </Grid>
                ))}
            </Grid>

        </div>
    )
}

export default List