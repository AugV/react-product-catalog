import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const PageNotFoundPage: React.FC = () => {
    return (
        <Paper>
            <Box textAlign="center">
                <Typography>
                    Page not found
                </Typography>
            </Box>
        </Paper>
    )
}

export default PageNotFoundPage;
