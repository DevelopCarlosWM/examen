import React from 'react'
import {
    Typography,
    Grid,
    Button,
    Paper,
    Divider,
    Container
} from '@material-ui/core'
const OrdersList = ( props ) => {
    console.log(props.orders)
    return(
        <>
            <Grid container alignItems='center' justify='center' spacing={2} style={{ marginTop:70 }}>
                <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
                    <Paper elevation={5} style={{ backgroundColor:'#424242', opacity:0.9 }}>
                        <Container maxWidth='md'>
                            <Typography variant='h6' style={{ color:'#d0c5c3' }}>Your Orders</Typography>
                            <Divider style={{ backgroundColor:'#d0c5c3' }}/>
                            <div style={{ marginTop:20, maxHeight:460, overflowY:'auto' }} id='style-3'>
                                { props.orders.map((item, key) =>
                                    <Grid container key={key} style={{ marginTop:15, cursor:'pointer' }} onClick={()=> props.setCurrentOrder(item)}>
                                        <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                                            <Typography component='div' variant='body1'  style={{ color:'#d0c5c3' }}>ID</Typography>
                                            <Divider style={{ backgroundColor:'#d0c5c3' }}/>
                                            <Typography component='div' variant='body2'  style={{ color:'#d0c5c3' }}>{item.id}</Typography>
                                        </Grid>
                                        <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                                            <Typography component='div' variant='body1'  style={{ color:'#d0c5c3' }}>NUMBER</Typography>
                                            <Divider style={{ backgroundColor:'#d0c5c3' }}/>
                                            <Typography component='div' variant='body2'  style={{ color:'#d0c5c3' }}>{item.number}</Typography>
                                        </Grid>
                                        <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                                            <Typography component='div' variant='body1'  style={{ color:'#d0c5c3' }}>NAME</Typography>
                                            <Divider style={{ backgroundColor:'#d0c5c3' }}/>
                                            <Typography component='div' variant='body2'  style={{ color:'#d0c5c3' }}>{item.name}</Typography>
                                        </Grid>
                                    </Grid>
                                )}
                            </div>
                        </Container>
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}
export default OrdersList