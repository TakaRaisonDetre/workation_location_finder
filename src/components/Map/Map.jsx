import React from 'react';
import GoogleMapReact from 'google-map-react'
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab'

import useStyles from './styles'


const Map = ({ setCoordinates, setBounds, coordinates }) => {

    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)')

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyAQnKd5O6qtSy6Aw0-3Icwlzb_jdeGX-Hw' }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                // t l b r
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={(e) => {
                    console.log(e)
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng });
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
                }}
                onClick={''}
            >

            </GoogleMapReact>
        </div>
    )
}

export default Map;