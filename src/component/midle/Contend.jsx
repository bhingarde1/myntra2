
import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Grid, Paper } from '@mui/material';
import axios from 'axios';
import { API } from "../../network 1"

import ProductCard from '../producrcard/ProductCard';
import { useNavigate } from 'react-router-dom';
import { AppsOutlined } from '@mui/icons-material';
import apiList from "../../apiList";
import Skeletan1 from '../skeletan/Skeletan1';
// import img from "../../images/myntralogo.PNG"
import StarOutlineIcon from '@mui/icons-material/StarOutline';

const Content = () => {

    const [productData, setProductData] = useState([])
    // console.log(productData);

    const [categories, setCategories] = useState([])
    let navii = useNavigate();
    // let {id}=useParams();
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        [theme.breakpoints.down('md')]: {
            // padding: theme.spacing(0)
            padding: '0px'
        },
    }));
    const instance = axios.create({
        baseURL: 'https://api.example.com/',
        timeout: 1000,
        headers: { 'X-Custom-Header': 'foobar' }
    });
    const MyBox = styled(Box)(({ theme }) => ({
        [theme.breakpoints.down('md')]: {
            display: 'none'
        },
        border: '1px solid rgb(197, 195, 195)'
    }))
    const MyBox2 = styled(Box)(({ theme }) => ({
        borderTop: '1px solid rgb(197, 195, 195)',
        borderBottom: '1px solid rgb(197, 195, 195)',
        padding: '1rem',
        [theme.breakpoints.down('md')]: {
            padding: '0rem'
        },
    }))
    const Typo = styled(Typography)(({ theme }) => ({
        [theme.breakpoints.down('md')]: {
            backgroundColor: '',
        },
        [theme.breakpoints.up('md')]: {
            fontWeight: '600',
            Padding: '8px'
        }
    }))
    const MyCard = styled(Card)((theme) => ({
        borderRadius: '0px',
    }))
    const MyStack = styled(Stack)(({ theme }) => ({
        [theme.breakpoints.down('md')]: {
            paddingTop: '80px'
        }
    }))

    const fetchData = async () => {
        try {
            const url = apiList.product;

            const response = await API.get(url)
            if (response) {
                setProductData(response.data.products)
                console.log(response.data.products)
            }
        } catch (error) {
            console.log('error', error)
        }
    }

    // fetch('https://dummyjson.com/products/categories')
    // .then(res => res.json())
    // .then(console.log);
    const fetchData1 = async () => {
        try {
            const URL = apiList.category;
            const response1 = await API.get(URL)
            console.log(response1);

            if (response1.data) {
                setCategories(response1.data)
                console.log(response1.data)
            }
        } catch (error) {
            console.log('error', error)
        }
    }

    useEffect(() => {
        fetchData()
        fetchData1()
    }, [])



    return (
        <MyStack direction='row'>
            <MyBox flex={2.5} p={0} sx={{
                position: 'sticky', bottom: '0px', display: 'flex', flexDirection: 'column', color: 'grey', fontSize: '10px'
            }}>
                <Box sx={{ display: 'grid', alignItems: 'start', borderBottom: '1px solid rgb(197, 195, 195)' }} p={4}>
                    <Typography variant='h6' sx={{ color: 'black', fontSize: '14px', mb: '15px' }}>CATEGORIES</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {categories.map((categ, index) => (
                            <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                                <input type="checkbox" id={`checkbox-${index}`} style={{ marginRight: '10px' }} />
                                <label htmlFor={`checkbox-${index}`} style={{ fontSize: '14px' }}>
                                    {categ.name}
                                </label>
                            </Box>
                        ))}
                    </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'start', flexDirection: 'column', borderBottom: '1px solid grey' }} p={4}>
                    <Typography variant='h6' sx={{ color: 'black', fontSize: '14px', mb: '15px' }}>BRAND</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: '5px' }}>
                        <input className='chk' type="checkbox" id="myCheckbox" />
                        {
                            productData.map((v, i) => {
                                <label className="lbl" htmlFor="myCheckbox">{v}</label>
                            })
                        }

                        {/* <label className="lbl" htmlFor="myCheckbox"></label> */}
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: '5px' }}>
                        <input className='chk' type="checkbox" id="myCheckbox" />
                        <label className="lbl" htmlFor="myCheckbox">Frisker</label>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: '5px' }}>
                        <input className='chk' type="checkbox" id="myCheckbox" />
                        <label className="lbl" htmlFor="myCheckbox">Tommy Hilfiger</label>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: '5px' }}>
                        <input className='chk' type="checkbox" id="myCheckbox" />
                        <label className="lbl" htmlFor="myCheckbox">V-Mart</label>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: '5px' }}>
                        <input className='chk' type="checkbox" id="myCheckbox" />
                        <label className="lbl" htmlFor="myCheckbox">HRX by Hrithik Roshan</label>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: '5px' }}>
                        <input className='chk' type="checkbox" id="myCheckbox" />
                        <label className="lbl" htmlFor="myCheckbox">U.S. Polo Assn.</label>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: '5px' }}>
                        <input className='chk' type="checkbox" id="myCheckbox" />
                        <label className="lbl" htmlFor="myCheckbox">WROGN</label>
                    </Box>       <Box sx={{ display: 'flex', alignItems: 'center', mb: '5px' }}>
                        <input className='chk' type="checkbox" id="myCheckbox" />
                        <label className="lbl" htmlFor="myCheckbox">VIMAL JONNY</label>
                    </Box>
                </Box>


                <Box sx={{ display: 'flex', alignItems: 'start', flexDirection: 'column', borderBottom: '1px solid grey' }} p={4}>
                    <Typography variant='h6' sx={{ color: 'black', fontSize: '14px', mb: '15px' }}>PRICE</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: '5px' }}>
                        <input className='chk' type="checkbox" id="myCheckbox" />
                        <label className="lbl" htmlFor="myCheckbox">Rs. 137 to Rs. 13853</label>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: '5px' }}>
                        <input className='chk' type="checkbox" id="myCheckbox" />
                        <label className="lbl" htmlFor="myCheckbox">Rs. 13853 to Rs. 27569</label>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: '5px' }}>
                        <input className='chk' type="checkbox" id="myCheckbox" />
                        <label className="lbl" htmlFor="myCheckbox">Rs. 27569 to Rs. 41285r</label>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: '5px' }}>
                        <input className='chk' type="checkbox" id="myCheckbox" />
                        <label className="lbl" htmlFor="myCheckbox">Rs. 41285 to Rs. 55001</label>
                        {/* <sub className='iam' sx={{color:'grey'}}>(139590)</sub> */}
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'start', flexDirection: 'column', borderBottom: '1px solid rgb(197, 195, 195)' }} p={4}>
                    <Typography variant='h6' sx={{ color: 'black', fontSize: '14px', mb: '15px' }}>COLOR</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: '5px', justifyContent: 'start' }}>
                        <input className='chk' type="checkbox" id="myCheckbox" />
                        <label className='color' type="checkbox"></label>
                        <label className="lbl" htmlFor="myCheckbox">red</label>
                        <label>(97125)</label>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: '5px', justifyContent: 'start' }}>
                        <input className='chk' type="checkbox" id="myCheckbox" />
                        <label className='color' style={{ backgroundColor: "blue" }} type="checkbox"></label>
                        <label className="lbl" htmlFor="myCheckbox">blue</label>
                        <label >(996677)</label>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: '5px', justifyContent: 'start' }}>
                        <input className='chk' type="checkbox" id="myCheckbox" />
                        <label className='color' style={{ backgroundColor: "gray" }} type="checkbox"></label>
                        <label className="lbl" htmlFor="myCheckbox">gray</label>
                        <label>(9744)</label>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: '5px', justifyContent: 'start' }}>
                        <input className='chk' type="checkbox" id="myCheckbox" />
                        <label className='color' style={{ backgroundColor: "green" }} type="checkbox"></label>
                        <label className="lbl" htmlFor="myCheckbox">green</label>
                        <label>(72460)</label>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: '5px', justifyContent: 'start' }}>
                        <input className='chk' type="checkbox" id="myCheckbox" />
                        <label className='color' style={{ backgroundColor: "balck" }} type="checkbox"></label>
                        <label className="lbl" htmlFor="myCheckbox">black</label>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: '5px', justifyContent: 'start' }}>
                        <input className='chk' type="checkbox" id="myCheckbox" />
                        <label className='color' style={{ backgroundColor: "yellow" }} type="checkbox"></label>
                        <label className="lbl" htmlFor="myCheckbox">white</label>
                        <label>(4647)</label>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: '5px', justifyContent: 'start' }}>
                        <input className='chk' type="checkbox" id="myCheckbox" />
                        <label className='color' style={{ backgroundColor: "pink" }} type="checkbox"></label>
                        <label className="lbl" htmlFor="myCheckbox">pink</label>
                        <label>(12345)</label>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: '5px' }}>
                        <input className='chk' type="checkbox" id="myCheckbox" />
                        <label className="lbl" htmlFor="myCheckbox">Lounge T-shirts</label>
                    </Box>
                </Box>
            </MyBox>
            <MyBox2 flex={10}>
                <Grid container spacing={0} wrap="wrap">
                    {productData?.length !== 0 ? productData.map((data) => (
                        <Grid item xs={6} sm={6} md={3} lg={3}>
                            <Item sx={{ boxShadow: '0px 0px 0px white' }}>
                                <MyCard onClick={() => navii(`/pro/${data.id}`)} sx={{ overflow: 'hidden', boxShadow: '0px 0px 0px white', borderRadius: '0px' }}>
                                    <Box sx={{ position: 'relative'}}>
                                        <CardMedia
                                            sx={{ height: 270, width: '100%',objectFit:"contain", backgroundSize: 'cover', backgroundPosition: 'top', backgroundColor: "#e9e3e3de " }}
                                            image={data.images[0]}
                                            title="green iguana"
                                        />

                                        <Box sx={{opacity:0.7,zIndex:10, position: 'absolute',background:"white",borderRadius:"6px", bottom: "7px", display: 'flex', alignItems: 'center', justifyContent: 'center', width: 'fit-content', marginTop: '2px', marginLeft: "12px", marginBottom:"2px" }}>
                                            <Typography sx={{ fontWeight: 'bold', fontSize: '14px',paddingRight:"8px",paddingLeft:"6px"  }}>
                                                {data.rating} <StarOutlineIcon sx={{ color: 'rgb(20, 149, 143)', fontSize: '15px', }} />
                                            </Typography>
                                            <Box sx={{ width: '1px', border: '1px solid rgb(224, 219, 219)', height: '16px' }}></Box>
                                            <Typography sx={{ fontSize: '14px',marginLeft:'1px',paddingRight:"8px" }}>
                                                {data.reviews?.length} 
                                            </Typography>
                                        </Box>

                                    </Box>
                                    <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                                        <Typo>
                                            {data.brand}
                                            {data.id}
                                        </Typo>
                                        <Typography sx={{ fontSize: '12px' }} variant="body2" component='p' color="text.secondary" noWrap>
                                            {data.title}
                                        </Typography>
                                        <Typography sx={{ display: 'flex' }} gap={1}>
                                            <Typography variant='h6' component='p' sx={{ fontSize: '12px' }}>Rs. {data.price}</Typography>
                                            <Typography component='p' sx={{ fontSize: '12px', textDecorationLine: 'line-through', color: 'grey' }}></Typography>
                                            <Typography component='p' sx={{ fontSize: '12px', color: 'orange' }}></Typography>
                                        </Typography>
                                    </CardContent>

                                </MyCard>

                            </Item>
                        </Grid>
                    )) : <Skeletan1 />}





                </Grid>
            </MyBox2>
        </MyStack>


    )
}

export default Content;


