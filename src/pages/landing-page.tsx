import { Box, Checkbox, FormControlLabel, makeStyles, Typography } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AccessContext } from '../context/access-context';
import { NavigationService } from '../services/navigation-service';

const useStyles = makeStyles({
    title: {
        fontSize: '24px',
        '@media (min-width:600px)': {
            fontSize: '40px',
        },
    }
})

const LandingPage: React.FC = () => {
    const { hasAccess, setAccess } = useContext(AccessContext);
    const [checkboxValue, setCheckboxValue] = useState(hasAccess);
    const classes = useStyles();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
        setAccess(checked);
        setCheckboxValue(checked);
    }

    return(
        <Box textAlign="center" paddingY={4}>
            <Box paddingY={3}>
                <Typography variant="h1" className={classes.title}>
                    Telia product catalog 
                </Typography>
            </Box>
            
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checkboxValue}
                        onChange={handleChange}
                    />
                }
                label="Mark to gain access"
            />

            <Link to={NavigationService.BRANDS_CATALOG_PATH}>
                <Typography variant="body1">
                    Enter
                </Typography>
            </Link>

        </Box>
    )
}

export default LandingPage;
