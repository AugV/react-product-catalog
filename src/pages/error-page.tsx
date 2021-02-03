import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const ErrorPage: React.FC = () => {
    return (
        <Paper>
            <Box textAlign="center">
                <Typography>
                    Error
                </Typography>
            </Box>
        </Paper>
    )
}

export default ErrorPage;
