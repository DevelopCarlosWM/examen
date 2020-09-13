import React from 'react'
import PropTypes from 'prop-types'
import {
    Modal,
    Backdrop,
    makeStyles,
    Typography,
    Divider,
    TextField,
    Grid,
    Button
} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import { useSpring, animated } from 'react-spring'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #fdbb4b',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

const AddProduct = (props) => {
  const classes = useStyles();
  const { open } = props
  return (
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper} style={{ backgroundColor:'#131416', width:400 }}>
            <div>
                <Typography variant='h6' component='div' style={{ color:'#d0c5c3' }}>Add a product to your order</Typography>
            </div>
            <Divider style={{ backgroundColor:'#d0c5c3' }}/>
            <div style={{ marginTop:20, textAlign:'center', backgroundColor:'#d0c5c3', borderRadius:12 }}>
                <div style={{ padding:10, }}>
                    <TextField 
                        label="Name" 
                        value={props.name}
                        onChange={ e =>{
                            props.onChangeText('name', e)
                        }}
                    />
                </div>
                <div style={{ padding:10}}>
                    <TextField 
                        label="SKU" 
                        value={props.sku}
                        onChange={ e =>{
                            props.onChangeText('sku', e)
                        }}
                    />
                </div>
                <div style={{ padding:10}}>
                    <TextField 
                        label="Quantity" 
                        type='number'
                        inputProps={{min:1}}
                        value={props.quantity}
                        onChange={ e =>{
                            props.onChangeText('quantity', e)
                        }}
                    />
                </div>
                <div style={{ padding:10}}>
                    <TextField 
                        label="Price"
                        type='number'
                        inputProps={{min:1}}
                        value={props.price}
                        onChange={ e =>{
                            props.onChangeText('price', e)
                        }}
                    />
                </div>
            </div>
            <Grid container alignItems='center' justify='center' spacing={3} style={{ marginTop:20 }}>
                <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                    <Button 
                        variant='outlined'
                        style={{ backgroundColor:'#e24727' }}
                        onClick={()=> props.closeModal()}
                    >Close</Button>
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                    <Button 
                        variant='contained'
                        style={{ backgroundColor:'#8939ad', color:'#d0c5c3' }}
                        endIcon={<AddIcon/>}
                        onClick={()=> props.addProduct()}
                    >
                        Add
                    </Button>
                </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
  );
}

export default AddProduct