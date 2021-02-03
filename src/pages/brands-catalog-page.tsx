import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Card } from '../components/card/card';
import { BrandsResponse } from '../models/brands-response';
import { apiService } from '../services/api-service';
import { NavigationService } from '../services/navigation-service';

const BrandsCatalogPage: React.FC = () => {
    const [ brands, setBrands ] = useState<BrandsResponse>()
    const history = useHistory();

    useEffect(() => {
        apiService.fetchBrands().then(setBrands);
    }, [])

    const goToBrandProducts = (brandId: string) => {
        history.push(`${NavigationService.BRANDS_CATALOG_PATH}/${brandId}`);
    }

    if (!brands) {
        return null;
    }
    
    return (
        <Grid container={true} spacing={3} justify="center">
            {
                brands.options.map(brand =>
                    <Grid item={true} key={brand.id}>
                        <Card
                            imageSrc={brand.displayImageUrl}
                            title={brand.displayName}
                            onClick={() => goToBrandProducts(brand.id)}
                        />
                    </Grid>
                )
            }

        </Grid>
    )
}

export default BrandsCatalogPage;
