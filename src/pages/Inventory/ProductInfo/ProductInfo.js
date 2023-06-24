import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react';
import { useQuery } from 'react-query';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const ProductInfo = () => {
    const { isLoading, error, data: products = [] } = useQuery('products', () =>
        fetch('https://i-family-server.vercel.app/products').then(res =>
            res.json()
        )
    )

    const handleProductDelete = (id) => {

        fetch(`https://i-family-server.vercel.app/products/${id}`, {
            method: "DELETE", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((result) => {
                if (result.deletedCount) {
                    alert('Deleted')
                    console.log(result);
                }
                
            });
    }



    // console.log(products);

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message
    return (
        <Box sx={{ mt: 1 }}>
            <Typography sx={{ color: '#455a64' }} variant="h5" component="h2">
                Product Info
            </Typography>

            <TableContainer component={Paper}>
                <Table sx={{ width: '100%', mt: 1 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>S. No</TableCell>
                            <TableCell>Title</TableCell>
                            <TableCell>Purchase Price</TableCell>
                            <TableCell>Sale Price</TableCell>
                            <TableCell align="right">Action</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((row, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {index + 1}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row?.productTitle}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row?.purchasePrice}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row?.salePrice}
                                </TableCell>
                                <TableCell align="right">
                                    <DeleteIcon onClick={() => handleProductDelete(`${row._id}`)}> </DeleteIcon>
                                    {/* <EditIcon></EditIcon> */}
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </Box>
    );
};

export default ProductInfo;