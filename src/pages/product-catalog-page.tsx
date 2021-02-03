import { AppBar, Button, ButtonGroup, Grid, Toolbar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from '../components/card/card';
import { PhoneResponse } from '../models/phone-response';
import { apiService } from '../services/api-service';
import { ArrayUtils, SortOrder } from '../utils/array-utils';

const ProductCatalogPage: React.FC = () => {
    const { brand } = useParams<{ brand: string }>();
    const [ products, setProducts ] = useState<PhoneResponse[]>();
    const [sortOrder, setSortOrder] = useState(SortOrder.ASCENDING);

    useEffect(() => {
        apiService.fetchPhones().then(setProducts);
    }, [])

    const goToItemDetails = (detailsPath: string) => {
        // external link
        window.location.href = detailsPath;
    }

    if (!products) {
        return null;
    }
    
    const filteredProductList = products.filter(product => product.brand === brand);

    const sortedProductList = filteredProductList.sort(ArrayUtils.compare('displayName', sortOrder))

    return (
        <React.Fragment> 

            <AppBar position="static">
                <Toolbar>
                    <ButtonGroup disableElevation variant="contained" color="primary">
                        <Button onClick={() => setSortOrder(SortOrder.ASCENDING)}>Ascending</Button> 
                        <Button onClick={() => setSortOrder(SortOrder.DESCENDING)}>Descending</Button>
                    </ButtonGroup>
                </Toolbar>
            </AppBar>

            <Grid container={true} spacing={3} justify="center">
                {
                    sortedProductList.map(product => 
                        <Grid item={true} key={product.contentKey}>
                            <Card
                                imageSrc={product.imgUrl}
                                title={product.displayName}
                                onClick={() => goToItemDetails(product.link)}
                            />
                        </Grid>
                    )
                }
            </Grid>
        </React.Fragment>
    )
}

export default ProductCatalogPage;
