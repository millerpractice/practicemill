import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import lightGreen from '@material-ui/core/colors/lightGreen';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

export default class Footer extends Component {

    render() {
        return (
            <Paper square={true} style={{ backgroundColor: lightGreen[700], height: 64, overflowX: "hidden" }}>
                <Typography style={{ color: "white", float: "right", marginTop: 40, marginRight: 10 }}>Practice Miller ©2019</Typography>
                <Link style={{color:'white', fontSize: 15, float: "left", marginLeft: 20, marginTop: 35, 
                fontWeight: 500, textDecorationLine: 'blink',  marginRight: 10}} to="/imprint">Imprint</Link>
                <Link style={{color:'white', fontSize: 15, fontWeight: 500, textDecorationLine: 'blink', 
                 marginRight: 10, float: "left", marginLeft: 20, marginTop: 35}} to="/privacy"> Privacy Policy</Link>
            </Paper>
        )
    }
}