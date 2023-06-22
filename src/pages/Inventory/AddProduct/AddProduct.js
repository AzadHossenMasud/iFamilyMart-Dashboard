import { Box, Typography } from '@mui/material';
import React from 'react';

const AddProduct = () => {
    return (
        <Box sx={{mt:1}}>
            <Typography sx={{color: '#455a64'}} variant="h5" component="h2">
               Add Product
            </Typography>
        </Box>
    );
};

export default AddProduct;