// import { Box } from '@mui/material'
// import React from 'react'

// const Skeletan = () => {
//   return (
//     <Box>

//     </Box>
//   )
// }

// export default Skeletan

import { Box, Breadcrumbs, Button, CardMedia, Divider, Grid, IconButton, List, ListItem, ListItemIcon, Typography, Skeleton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
// import Header from '../hedaer/Hedaer'; // Ensure the import path is correct
// import { API } from "../../network 1"; // Ensure the import path is correct
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import apiList from '../../apiList';
import styled from 'styled-components'; 
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import StarBorder from '@mui/icons-material/StarBorder';
import GradingIcon from '@mui/icons-material/Grading';

const ProductCard = () => {
    let { id } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const url = `${apiList.product}/${id}`;
            // const response = await API.get(url);
            // if (response) {
            //     setData(response.data);
            //     setLoading(false);
            // }
        } catch (error) {
            console.log('error', error);
            setLoading(false);
        }
    };

    const InlineBox = styled(Box)({
        display: 'flex',
        alignItems: 'center',
    });

    useEffect(() => {
        fetchData();
    }, [id]);

    return (
        <Box sx={{ width: '100%', overflow: 'hidden', height: "auto" }}>
            {/* <Header /> */}
            <Box sx={{ marginTop: { xs: '80px', sm: '100px' }, marginBottom: '15px', ml: { xs: '10px', sm: '20px' } }}>
                <Breadcrumbs sx={{ fontSize: "14px" }} aria-label="breadcrumb">
                    <Link style={{ marginRight: '1px' }} underline="hover" color="inherit" href="/">
                        Home
                    </Link>
                    <Link style={{ marginLeft: '1px' }} underline="hover" color="inherit" href="/material-ui/getting-started/installation/">
                        Clothing
                    </Link>
                    <Link style={{ marginLeft: '1px' }} underline="hover" color="inherit" href="/material-ui/getting-started/installation/">
                        Men Clothing
                    </Link>
                    <Link style={{ marginLeft: '1px', fontSize: "14px", fontWeight: "bold" }} underline="hover" color="inherit" href="/material-ui/getting-started/installation/">
                        Maniac Tshirts
                    </Link>
                    <Link style={{ marginLeft: '1px', fontSize: "14px", fontWeight: "bold" }} underline="hover" color="inherit" href="/material-ui/getting-started/installation/">
                        Men T-Shirt
                    </Link>
                </Breadcrumbs>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', px: { xs: 2, md: 5 } }}>
                <Box sx={{ width: { xs: '100%', md: '50%' } }}>
                    <Grid container sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                        {loading ? (
                            [1, 2, 3, 4].map((_, index) => (
                                <Grid item xs={12} sm={6} md={5.9} key={index}>
                                    <Skeleton variant="rectangular" width="100%" height={300} sx={{ marginBottom: "8px" }} />
                                </Grid>
                            ))
                        ) : (
                            data?.images.map((image, index) => (
                                <Grid item xs={12} sm={6} md={5.9} key={index}>
                                    <CardMedia
                                        sx={{ marginBottom: "8px", height: { xs: 300, md: 500 }, width: '100%', backgroundSize: 'cover', backgroundPosition: 'top', backgroundColor: "#c6c6c6e1" }}
                                        image={image}
                                        title="product image"
                                    />
                                </Grid>
                            ))
                        )}
                    </Grid>
                </Box>
                <Box sx={{ width: { xs: '100%', md: '45%' }, height: 'auto' }}>
                    {loading ? (
                        <>
                            <Skeleton variant="text" width="60%" height={30} />
                            <Skeleton variant="text" width="40%" height={20} sx={{ mb: 2 }} />
                            <Skeleton variant="rectangular" width="100%" height={100} sx={{ mb: 2 }} />
                            <Skeleton variant="rectangular" width="100%" height={60} sx={{ mb: 2 }} />
                            <Skeleton variant="rectangular" width="100%" height={100} />
                        </>
                    ) : (
                        <>
                            <Typography variant='h5' sx={{ fontWeight: 'bold' }}>{data.brand}</Typography>
                            <Typography variant='h6' component='p' sx={{ fontWeight: '300', color: 'grey' }}>{data.title}</Typography>
                            <Box sx={{ border: '1px solid rgb(224, 219, 219)', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 'fit-content' }}>
                                <Typography sx={{ fontWeight: 'bold', fontSize: '15px', marginLeft: '6px', marginRight: '6px' }}>
                                    {data.rating} <StarOutlineIcon sx={{ color: 'rgb(20, 149, 143)', fontSize: '15px', marginBottom: '3px' }} />
                                </Typography>
                                <Box sx={{ width: '1px', border: '1px solid rgb(224, 219, 219)', height: '14px' }}></Box>
                                <Typography sx={{ fontSize: '15px', marginLeft: '6px', marginRight: '6px' }}>
                                    {data.reviews?.length} Ratings
                                </Typography>
                            </Box>
                            <Divider sx={{ marginTop: "15px", marginBottom: "20px" }} />
                            <InlineBox>
                                <Typography variant="h5" component="p">
                                    {data.price}
                                </Typography>
                                <Typography variant='h5' sx={{ marginLeft: 1, color: "gray" }}>MRP </Typography>
                                <Typography variant='h6' sx={{ marginLeft: 1, textDecoration: 'line-through', color: "red" }}>{data.price + 300}</Typography>
                                <Typography variant='h6' sx={{ color: 'orange', marginLeft: "5px", fontWeight: '20px' }} >(35% OFF)</Typography>
                            </InlineBox>
                            <Typography sx={{ color: "green" }}>inclusive of all taxes</Typography>
                            <Box sx={{ display: "flex", gap: "5px", marginTop: "5px", marginBottom: "7px", flexWrap: 'wrap' }}>
                                <CardMedia
                                    sx={{ height: "100px", width: '100px', backgroundSize: 'cover', backgroundPosition: 'top', backgroundColor: "#c6c6c6e1" }}
                                    image={data.images?.[0]} // Changed to display first image
                                    title="thumbnail"
                                />
                                <CardMedia
                                    sx={{ height: "100px", width: '100px', backgroundSize: 'cover', backgroundPosition: 'top', backgroundColor: "#c6c6c6e1" }}
                                    image={data.thumbnail}
                                    title="thumbnail"
                                />
                            </Box>
                            <Box sx={{ display: 'flex', gap: '12px', flexDirection: { xs: 'column', sm: 'row' } }}>
                                <Button
                                    variant="contained"
                                    sx={{ borderRadius: '8px', minWidth: "205px", height: "50px", backgroundColor: "#ff3e6c" }}
                                    startIcon={<ShoppingBagIcon />}
                                >
                                    Add to Bag
                                </Button>
                                <Button
                                    variant="outlined"
                                    color="secondary"
                                    sx={{ borderRadius: '8px', minWidth: "159px", mt: { xs: 2, sm: 0 } }}
                                    startIcon={<FavoriteIcon />}
                                >
                                    Add to Wishlist
                                </Button>
                            </Box>
                            <Divider sx={{ marginTop: "20px", marginBottom: "10px" }} />
                            <Box>
                                <Typography sx={{ fontWeight: "bold", fontStretch: "extra-expanded" }}>
                                    DELIVERY OPTIONS
                                    <IconButton edge="end" size="small" style={{ marginLeft: 8 }}>
                                        <LocalShippingIcon />
                                    </IconButton>
                                </Typography>
                                <Typography variant='h7'>Availability Status: {data.availabilityStatus}</Typography>
                            </Box>
                            <Box>
                                <Typography sx={{ fontWeight: "bold" }} variant='h7'>
                                    BEST OFFERS
                                    <IconButton edge="end" size="small" style={{ marginLeft: 8 }}>
                                        <LocalOfferIcon />
                                    </IconButton>
                                </Typography>
                                <Typography sx={{ fontWeight: "bold", display: "flex", marginTop: "10px", marginBottom: "10px" }}>
                                    Best Price: <Typography sx={{ color: "orange" }}>Rs.345</Typography>
                                </Typography>
                                <Box>
                                    <List>
                                        <ListItem sx={{ paddingLeft: 1 }}>
                                            <ListItemIcon>
                                                <StarBorder sx={{ color: 'primary.main' }} />
                                            </ListItemIcon>
                                            <Typography variant="body2">
                                                Applicable on: Orders above Rs. 649 (only on first purchase)
                                            </Typography>
                                        </ListItem>
                                        <ListItem sx={{ paddingLeft: 1 }}>
                                            <ListItemIcon>
                                                <StarBorder sx={{ color: 'primary.main' }} />
                                            </ListItemIcon>
                                            <Typography variant="body2">
                                                Coupon code: MYNTRA200
                                            </Typography>
                                        </ListItem>
                                        <ListItem sx={{ paddingLeft: 1 }}>
                                            <ListItemIcon>
                                                <StarBorder sx={{ color: 'primary.main' }} />
                                            </ListItemIcon>
                                            <Typography variant="body2">
                                                Coupon Discount: Rs. 154 off (check cart for final savings)
                                            </Typography>
                                        </ListItem>
                                    </List>
                                </Box>
                            </Box>
                            <Box>
                                <Typography sx={{ color: "red", fontWeight: "bold", fontSize: "14px", marginBottom: "9px", marginTop: '10px' }}>
                                    View Eligible Products
                                </Typography>
                                <Typography sx={{ fontWeight: "bold", fontSize: "16px", marginBottom: "9px", marginTop: '5px' }}>
                                    10% Instant Discount on RuPay Credit Card.
                                </Typography>
                                <Typography sx={{ fontSize: "14px", marginBottom: "9px" }}>
                                    Min Spend ₹3,500; Max Discount ₹1,000
                                </Typography>
                            </Box>
                            <Box>
                                <Typography sx={{ color: "red", fontWeight: "bold", fontSize: "14px", marginBottom: "9px", marginTop: '5px' }}>
                                    Terms & Condition
                                </Typography>
                                <Typography sx={{ fontWeight: "bold", fontSize: "16px", marginBottom: "9px", marginTop: '5px' }}>
                                    10% Instant Discount on HSBC Credit
                                </Typography>
                                <Typography sx={{ fontSize: "14px", marginBottom: "9px", marginTop: '5px' }}>
                                    Min Spend ₹3,000; Max Discount ₹1,000.
                                </Typography>
                            </Box>
                            <Divider sx={{ marginTop: "20px", marginBottom: "10px" }} />
                            <Box sx={{ width: { xs: '100%', md: '300px' } }}>
                                <Typography sx={{ fontWeight: "bold", fontStretch: "extra-expanded" }}>
                                    PRODUCT DETAILS
                                    <IconButton edge="end" size="small" style={{ marginLeft: 8 }}>
                                        <GradingIcon />
                                    </IconButton>
                                </Typography>
                                <Typography sx={{ padding: '9px', fontStretch: "extra-expanded", fontSize: "14.5px" }}>
                                    {data.description}
                                </Typography>
                            </Box>
                        </>
                    )}
                </Box>
            </Box>
        </Box>
    );
};

export default ProductCard;
