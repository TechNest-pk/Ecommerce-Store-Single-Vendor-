import React from 'react';
//Material UI
import { CircularProgress } from '@material-ui/core';

const Loader = props => {
    return (
        <div style={{
            display: 'flex',
            minHeight: '50vh',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <CircularProgress style={{ color: '#087059', height: 80, width: 80 }} />
        </div>
    )
}

export default Loader;