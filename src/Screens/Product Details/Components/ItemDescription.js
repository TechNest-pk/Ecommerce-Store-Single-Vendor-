import React from 'react';
//Material UI
import { Grid, Typography, Divider, } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';

//Components
import Description from '../../../Components/MarkUpsViewer';

// const styles = makeStyles(theme => ({

// }));

const productDescription = props => {

    const { prod } = props;

    return (
        <div
            style={{
                padding: 40,
                backgroundColor: '#fff',
                color: '#666666',
            }}>
            <Grid container spacing={3}>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Typography variant="h5">
                        Description:
                    </Typography>
                    <br/>
                    <Description overview={prod.overview} />
                </Grid>
            </Grid>
            <Divider style={{ marginTop: 10, marginBottom: 20 }} />
            <Grid container spacing={3}>
                {
                    prod.bulletPoints &&
                    prod.bulletPoints.map((specification, index) => {
                        return (
                            <Grid key={index} item lg={3} md={4} sm={6} xs={6}>
                                {/* <Typography variant="h6" style={{ color: '#000' }} color="textSecondary" component="h5">
                                    specification
                            </Typography> */}
                                <Typography variant="p" color="textSecondary" component="p">
                                    {specification}
                                </Typography>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </div>
    )
}

export default productDescription;