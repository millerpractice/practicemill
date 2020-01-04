import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import lightGreen from '@material-ui/core/colors/lightGreen';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import arzt from "./arzt.png"
import ScrollableAnchor from 'react-scrollable-anchor'


export default class Team extends Component {

    render() {
        return (
            <ScrollableAnchor id={'team'}>
                <Paper square={true} style={{ height: 700, backgroundColor: lightGreen[500], overflowX: "hidden" }}>
                    <Typography style={{ color: "white", paddingTop: 30, fontSize: 40, fontWeight: 500, textAlign: "center", }}>Our team</Typography>
                    <Grid container spacing={1}>
                        <Grid item xs={6}>
                            <img src={arzt} alt="arzt" style={{ float: "left", height: 240, marginTop: 70, paddingLeft: 25,
                                marginRight: -100, marginLeft: -70 }} />
                            <Typography style={{ color: "white", paddingTop: 70, fontSize: 17, fontWeight: 500, textAlign: "left", paddingLeft: 230, paddingRight: 80 }}>
                                Dr. Moris Miller studied medicine at the university in Frankfurt am Main.
    </Typography>
                            <Typography style={{ color: "white", fontSize: 17, fontWeight: 500, textAlign: "left", paddingLeft: 270, paddingTop: 20, paddingRight: 80 }}>
                                After his graduation in 1998,
                                he gained experience in different clinics and medical centers and spent a couple of years in England where he gathered
                                expert knowledge in the fields of surgical diagnostic and therapy, cardiology, radiology and rehabilitation. At that time Dr. Miller
                                was announced Member of the Royal College of General Practitioners in London.
    </Typography>
                            <Typography style={{ color: "white", fontSize: 17, fontWeight: 500, textAlign: "left", marginLeft: 272, paddingTop: 20, paddingRight: 80 }}>
                                After he successfully received his degree in general and internal medicine from the State Chamber
                                 of Medicine in Hessen in 2016, he founded his own practice in Darmstadt.
</Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </ScrollableAnchor>
        )
    }
}