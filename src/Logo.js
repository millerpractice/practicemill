import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import lightGreen from '@material-ui/core/colors/lightGreen';
import logo from './logo.png';




export default class Logo extends Component {

    

    render() {
        return (

            <Paper square={true} style={{
                backgroundColor: lightGreen[300], marginTop: 64,
                height: 160, overflowX:"hidden", overflowY:"hidden"
            }}>
                <img src={logo} alt="Logo" style={{ float: "left", height: 150, marginTop: 12, marginLeft:15 }} />
                <div style={{marginTop: 120, marginRight: -60, width: 600, float: 'right'}}>
                <a style={{color:'white', fontSize: 20, fontWeight: 500, textDecorationLine: 'blink',  marginRight: 10}} href='#welcome'> Welcome </a>
                <a style={{color:'white', fontSize: 20, fontWeight: 500, textDecorationLine: 'blink', marginRight: 10}} href='#aboutus'> About us </a>
                <a style={{color:'white', fontSize: 20, fontWeight: 500, textDecorationLine: 'blink', marginRight: 10}} href='#team'>Team </a>
                <a style={{color:'white', fontSize: 20, fontWeight: 500, textDecorationLine: 'blink', marginRight: 10}} href='#contact'> Contact</a>
                </div>
            </Paper>
        )
    }
}
