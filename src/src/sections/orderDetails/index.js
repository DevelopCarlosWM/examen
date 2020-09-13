import React from 'react'
import{
    Paper,
    Button,
    Typography,
    Grid,
    Container,
    Divider
} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';

const OrderDetails = ( props ) => {
    const { items } = props.order
    return(
        <>
            <Grid container alignItems='center' justify='center' spacing={2} style={{ marginTop:70 }}>
                <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
                    <Paper elevation={5} style={{ backgroundColor:'#424242', opacity:0.9 }}>
                        <Container maxWidth='md'>
                            <Typography variant='h6' style={{ color:'#d0c5c3' }}>{'Order: ' + props.order.name}</Typography>
                            <Typography variant='h6' style={{ color:'#d0c5c3', marginTop:15 }}>Products</Typography>
                            <Divider style={{ backgroundColor:'#d0c5c3' }}/>
                            <div style={{ marginTop:20, maxHeight:460, overflowY:'auto' }} id='style-3'>
                                { items.map((item, key) =>
                                    <Grid container key={key} style={{ marginTop:15, cursor:'pointer' }} onClick={()=> props.setCurrentOrder(item)}>
                                        <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                                            <Typography component='div' variant='body1'  style={{ color:'#d0c5c3' }}>NAME</Typography>
                                            <Divider style={{ backgroundColor:'#d0c5c3' }}/>
                                            <Typography component='div' variant='body2'  style={{ color:'#d0c5c3' }}>{item.name}</Typography>
                                        </Grid>
                                        <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                                            <Typography component='div' variant='body1'  style={{ color:'#d0c5c3' }}>SKU</Typography>
                                            <Divider style={{ backgroundColor:'#d0c5c3' }}/>
                                            <Typography component='div' variant='body2'  style={{ color:'#d0c5c3' }}>{item.sku}</Typography>
                                        </Grid>
                                        <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                                            <Typography component='div' variant='body1'  style={{ color:'#d0c5c3' }}>QUANTITY</Typography>
                                            <Divider style={{ backgroundColor:'#d0c5c3' }}/>
                                            <Typography component='div' variant='body2'  style={{ color:'#d0c5c3' }}>{item.quantity}</Typography>
                                        </Grid>
                                        <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                                            <Typography component='div' variant='body1'  style={{ color:'#d0c5c3' }}>PRICE</Typography>
                                            <Divider style={{ backgroundColor:'#d0c5c3' }}/>
                                            <Typography component='div' variant='body2'  style={{ color:'#d0c5c3' }}>{item.price}</Typography>
                                        </Grid>
                                    </Grid>
                                )}
                            </div>
                            <div style={{ marginTop:20, display:'flex', flexDirection:'row-reverse', paddingBottom:15 }}>
                                <Button
                                    style={{ backgroundColor:'#8939ad', color:'#d0c5c3' }}
                                    endIcon={<AddIcon/>}
                                    variant='contained'
                                    onClick={()=> props.openModal()}
                                >
                                    Add Product
                                </Button>
                                <Button
                                    style={{ backgroundColor:'#8939ad', color:'#d0c5c3', marginRight:15 }}
                                    variant='outlined'
                                    onClick={()=> props.goBack()}
                                >
                                    Go Back
                                </Button>
                            </div>
                        </Container>
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}
export default OrderDetails