import React from 'react';
import { AutoComplete } from '@react-google-maps/api'
import { AppBar, Toolbar, Typography, InputBase, Box, Input } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import SearchIcon from '@material-ui/icons/Search'
import { classes } from 'istanbul-lib-coverage';
import useStyles from './styles'

const Header = () => {

    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h4" className={classes.title}>
                    Work location finder
                </Typography>
                <Box display="flex">
                    <Typography variant="h6" className={classes.title}>
                        Explore location
                    </Typography>
                    {/* <Autocomplete> */}
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase placeholder="Search…" classes={{ root: classes.inputRoot, input: classes.inputInput }} />
                    </div>
                    {/* </Autocomplete> */}
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header