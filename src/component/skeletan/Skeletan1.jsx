// import { Box } from '@mui/material'
// import React from 'react'

// const Skeletan1 = () => {
//   return (
//     <MyBox2 flex={10}>
//                 <Grid  container spacing={0} wrap="wrap">
//                   {productData?.length !== 0 ? productData.map((data)=>(
//                     <Grid   item xs={6} sm={6} md={3} lg={3}>
//                     <Item sx={{ boxShadow: '0px 0px 0px white' }}>
//                         <MyCard onClick={()=>navii(`/pro/${data.id}`)} sx={{ overflow: 'hidden', boxShadow: '0px 0px 0px white', borderRadius: '0px' }}>
//                             <CardMedia
//                                 sx={{ height: 270, width: '100%', backgroundSize: 'cover', backgroundPosition: 'top',border:'1px solid rgb(224, 219, 219)' }}
//                                 image={data.images[0]}
//                                 title="green iguana"
//                             />
//                             <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
//                                 <Typo>
//                                     {data.brand}
//                                     {data.id}
//                                 </Typo>
//                                 <Typography sx={{ fontSize: '12px' }} variant="body2" component='p' color="text.secondary" noWrap>
//                                     {data.title}
//                                 </Typography>
//                                 <Typography sx={{ display: 'flex' }} gap={1}>
//                                     <Typography variant='h6' component='p' sx={{ fontSize: '12px' }}>Rs. {data.price}</Typography>
//                                     <Typography component='p' sx={{ fontSize: '12px', textDecorationLine: 'line-through', color: 'grey' }}></Typography>
//                                     <Typography component='p' sx={{ fontSize: '12px', color: 'orange' }}></Typography>
//                                 </Typography>
//                             </CardContent>
 
//                         </MyCard>
//                     </Item>
//                 </Grid>
//                   )):<Skeletan1/>}
                   
                   
 
 
 
//                 </Grid>
//             </MyBox2>
//   )
// }

// export default Skeletan1

import { Box, Grid, Skeleton, Card, CardMedia, CardContent, Typography } from '@mui/material';
import React from 'react';

const Skeletan1 = () => {
  return (
    <Box sx={{ flexGrow: 1, p: { xs: 1, sm: 2, md: 3 }, mt: 2 }}>
      <Grid container spacing={2}>
        {Array.from({ length: 8 }).map((_, index) => (
          <Grid item xs={6} sm={6} md={3} lg={3} key={index}>
            <Card sx={{ borderRadius: '0px', boxShadow: '0px 0px 0px white' }}>
              <CardMedia
                sx={{ height: 270, width: '100%', backgroundColor: '#c6c6c6e1' }}
              >
                <Skeleton variant="rectangular" sx={{ height: '100%' }} />
              </CardMedia>
              <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                <Typography>
                  <Skeleton width={100} height={20} />
                </Typography>
                <Typography>
                  <Skeleton width="100%" height={20} />
                </Typography>
                <Typography sx={{ display: 'flex', gap: 1 }}>
                  <Skeleton width={60} height={20} />
                  <Skeleton width={60} height={20} />
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skeletan1;
