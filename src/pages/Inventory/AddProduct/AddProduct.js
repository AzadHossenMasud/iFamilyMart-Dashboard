import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { EditorState } from 'draft-js';
import React, { useEffect, useState } from 'react';
import { Editor, } from 'react-draft-wysiwyg';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";


const AddProduct = () => {


    const { data: brands = [] } = useQuery('brands', () =>
        fetch('https://i-family-server.vercel.app/brandname').then(res =>
            res.json()
        )
    )

    const { data: groups = [] } = useQuery('groups', () =>
        fetch('https://i-family-server.vercel.app/productGroup').then(res =>
            res.json()
        )
    )

    const [MRP, setMRP] = useState(0)
    const [Discount, setDiscount] = useState(0)
    const [salePrice, setSalePrice] = useState(0)
    const [editorValue, setEditorValue] = useState('')

    useEffect(() => {
        setSalePrice(MRP - MRP * Discount / 100)
    }, [MRP, Discount])

    // const [editorState, setEditorState] = useState(
    //     () => EditorState.createEmpty(),
    // );

    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const productImage1 = data.productImage1[0];
        // const image2 = data.productImage2[0];
        // const image3 = data.productImage3[0];
        // const image4 = data.productImage4[0];
        const formData = new FormData();

        formData.append("image", productImage1);
        // formData.append("image", image2);
        // formData.append("image", image3);
        // formData.append("image", image4);

        const url = `https://api.imgbb.com/1/upload?key=22742c11cc7cbc3bb3001d7c389d4b18`;
        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((imgresult) => {
                if (imgresult.success) {
                    const { brandName,
                        catagory,
                        discount,
                        model,
                        mrp,
                        productDescription,
                        productGroup,
                        productImage1,
                        productTitle,
                        purchasePrice,
                        quantity,
                        salePrice, size } = data


                    const productData = {
                        brandName,
                        catagory,
                        discount,
                        model,
                        mrp,
                        productDescription,
                        productGroup,
                        productImage1: imgresult.data.url,
                        productTitle,
                        purchasePrice,
                        quantity,
                        salePrice :parseInt(mrp) - parseInt(mrp) * parseInt(discount) / 100
                        , size
                    }

                    fetch("https://i-family-server.vercel.app/products", {
                        method: "POST", // or 'PUT'
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(productData),
                    })
                        .then((response) => response.json())
                        .then((addresult) => {
                            if (addresult.acknowledged) {
                                reset()
                                console.log(addresult);
                                setMRP(0)
                                setDiscount(0)
                            }
                            //   console.log("Success:", data);
                        })
                        .catch((error) => {
                            console.error("Error:", error);
                        });
                    // console.log(productData)
                }

            })



    }
    return (
        <Box sx={{ mt: 1 }}>
            <Typography sx={{ color: '#455a64' }} variant="h5" component="h2">
                Add Product
            </Typography>

            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid sx={{ mt: 2 }} container direction="row"

                    alignItems="center" spacing={2}>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Brand Name</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Brand Name"

                                {...register("brandName")}
                            >
                                {
                                    brands.map((brand, index) => <MenuItem key={index} value={brand?.brandName}>{brand?.brandName}</MenuItem>)
                                }

                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Product Group</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Product Group"

                                {...register("productGroup")}
                            >
                                {
                                    groups.map((group, index) => <MenuItem key={index} value={group?.productGroup}>{group?.productGroup}</MenuItem>)
                                }

                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <TextField {...register("catagory")} id="outlined-basic" label="Category" variant="outlined" />

                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <TextField {...register("size")} id="outlined-basic" label="Size" variant="outlined" />

                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <TextField {...register("model")} id="outlined-basic" label="Model" variant="outlined" />

                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <TextField {...register("purchasePrice")} type="number"
                            id="outlined-basic" label="Purchase Price/Unit" variant="outlined" />

                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <TextField {...register("mrp")} type="number" onChange={e => setMRP(e.target.value)}
                            id="outlined-basic" label="MRP/Unit" variant="outlined" />

                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <TextField {...register("discount")} type="number" onChange={e => setDiscount(e.target.value)}
                            id="outlined-basic" label="Discount" variant="outlined" />

                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <TextField {...register("salePrice")} type="number" value={salePrice}
                            id="outlined-basic" label=" Sale Price/Unit" variant="outlined" />

                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <TextField {...register("quantity")} id="outlined-basic" label="Quantity" variant="outlined" />

                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <TextField {...register("productTitle")} id="outlined-basic" label="Product Title" variant="outlined" />

                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <TextField
                            id="outlined-multiline-static"
                            label="Product Description"
                            multiline
                            // rows={10}
                            {...register("productDescription")}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <TextField
                            id="outlined-number"
                            label="Product Image 300 x 300"
                            type="file"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            {...register("productImage1")}
                        />
                    </Grid>
                    {/* <Grid item xs={12} sm={6} md={4} lg={3}>
                        <TextField
                            id="outlined-number"
                            label="Product Image 300 x 300"
                            type="file"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            {...register("productImage2")}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <TextField
                            id="outlined-number"
                            label="Product Image 300 x 300"
                            type="file"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            {...register("productImage3")}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <TextField
                            id="outlined-number"
                            label="Product Image 300 x 300"
                            type="file"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            {...register("productImage4")}
                        />
                    </Grid> */}














                </Grid>
                <Box sx={{ mt: 2 }} textAlign='center'>
                    <Button type="submit" variant="contained">Submit</Button>

                </Box>

            </form>


        </Box>
    );
};

export default AddProduct;