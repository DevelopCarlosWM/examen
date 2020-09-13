import React from 'react'
import {
    Toolbar,
    Typography,
    AppBar
} from '@material-ui/core'
const Header = ( props ) => {
    return(
        <div>
            <AppBar style={{ backgroundColor:'#131416' }}> 
                <Toolbar>
                    <Typography variant='h6' style={{ color:'#d0c5c3' }} >{props.title}</Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default Header