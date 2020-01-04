import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import lightGreen from '@material-ui/core/colors/lightGreen';
import teal from '@material-ui/core/colors/teal';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import office from "./office.jpg"
import map from "./map.PNG"
import ScrollableAnchor from 'react-scrollable-anchor'

export default class Contact extends Component {

    render() {
        return (
            <ScrollableAnchor id={'contact'}>
            <Paper square={true} style={{ backgroundColor: lightGreen[300], height: 600, overflowX:"hidden" }}>
                <Grid container style={{ paddingTop: 45, backgroundColor: lightGreen[300], flexWrap: "inherit", justify:"space-evenly" }}>
                    <Grid item xs style={{ backgroundColor: lightGreen[200], height: 560, paddingLeft: 0, paddingRight: 0,
                     marginLeft: 40, marginRight: 30,marginTop: -20,borderRadius: 16}}>
                        <Typography style={{ color: lightGreen[700], fontSize: 30, fontWeight: 700 }}>Contact</Typography>
                        <MailOutlineIcon color="primary" style={{ float: "left", marginLeft: 15, fontSize: 40, marginTop: 20, fontWeight:700 }}>
                        </MailOutlineIcon>
                        <Typography style={{ color: lightGreen[700],textAlign: "left", marginLeft: 80, marginTop: 25, fontSize: 17, fontWeight: 500 }}>
                            info_praxismiller@web.de</Typography>
                        <PhoneIcon color="primary" style={{ float: "left", marginLeft: -40, fontSize: 40, marginTop: 25 }}></PhoneIcon>
                        <Typography style={{ color: lightGreen[700],textAlign: "left", marginLeft: 80, marginTop: 30, fontSize: 17, fontWeight: 500 }}>
                            01745687998 </Typography>
                    <LocationOnIcon color="primary" style={{ float: "left", marginLeft: 11, fontSize: 40, marginTop: 40 }}></LocationOnIcon>
                    <Typography style={{ color: lightGreen[700],textAlign: "left", marginLeft: 80, marginTop: 25, fontSize: 17, fontWeight: 500 }}>
                            Liebigstraße 62 </Typography>
                            <Typography style={{ color: lightGreen[700],textAlign: "left", marginLeft: 80, fontSize: 17, fontWeight: 500 }}>
                            64293 Darmstadt</Typography>
                            <Typography style={{ color: lightGreen[700],textAlign: "left", marginLeft: 80, fontSize: 17, fontWeight: 500 }}>
                            Germany </Typography>
                    <img src={map} alt="map" style={{ marginTop:5,marginLeft:-35, height:280}} />
                </Grid>
                <Grid item xs style={{ backgroundColor: lightGreen[200], height: 560, paddingLeft: 0, paddingRight: 0, 
                    marginRight: 40, marginLeft: 30, marginTop: -20,borderRadius: 16 }}>
                <Typography style={{ color: teal[800], fontSize: 30, fontWeight: 700 }}>Our opening hours</Typography>
                <Typography style={{ color: teal[800], fontSize: 17, fontWeight: 500, marginTop:50 }}>Mon, Tue, Thu:</Typography> 
                <Typography style={{ color: teal[800], fontSize: 17, fontWeight: 500 }}>08:00 - 12:00 / 15:00 - 18:00</Typography> 
                <Typography style={{ color: teal[800], fontSize: 17, fontWeight: 500, marginTop:15 }}>Wed & Fri: </Typography> 
                <Typography style={{ color: teal[800], fontSize: 17, fontWeight: 500 }}>08:00 - 14:00</Typography> 
                <Typography style={{ color: teal[800], fontSize: 17, fontWeight: 500, marginTop:15 }}>Mon - Fri: </Typography> 
                <Typography style={{ color: teal[800], fontSize: 17, fontWeight: 500 }}>Private consultation by appointment</Typography> 
                <img src={office} alt="office" style={{ marginTop:50}} />
                </Grid>
                </Grid >
            </Paper >
            </ScrollableAnchor>
        )
    }
}
