import { Grid } from '@material-ui/core'
import React from 'react'

function Links() {
    return (
        <React.Fragment>
            <Grid container >
                <Grid sm={1}/>
                <Grid item sm={1} >
                    Industries
                </Grid>
                <Grid item sm={1} >
                    Functions
                </Grid>
                <Grid item sm={1} >
                    Featured 
                </Grid>
                <Grid item sm={1} >
                    Location
                </Grid>
                <Grid item sm={1} >
                    Careers
                </Grid>
                <Grid item sm={1} >
                    About Us
                </Grid>
            </Grid>
        </React.Fragment>    
    )
}

export default Links
