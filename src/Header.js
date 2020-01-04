import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import lightGreen from '@material-ui/core/colors/lightGreen';


export default class Header extends Component{
    
render(){
    return(
<AppBar position="absolute" style ={{backgroundColor:lightGreen[700], width:"100%"}}>
  <Toolbar>
    <MailOutlineIcon color="primary" style={{float:"right", marginRight:5}}>
    </MailOutlineIcon>
    <Typography style={{fontSize:15,  fontWeight: 500}}>
      info_praxismiller@web.de
    </Typography>
    <PhoneIcon color="primary" style={{float:"right", marginLeft:20, marginRight:5}}></PhoneIcon>
    <Typography style={{fontSize:15,  fontWeight: 500}}>
      01745687998
    </Typography>
  </Toolbar>
</AppBar>
)
    }
};