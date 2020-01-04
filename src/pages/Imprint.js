import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import lightGreen from '@material-ui/core/colors/lightGreen';
import teal from '@material-ui/core/colors/teal';
import Typography from '@material-ui/core/Typography';

export default class Imprint extends Component {

    render() {
        return (
            <Paper square={true} style={{ backgroundColor: lightGreen[300], height: 1000, overflowX: "hidden" }}>
                <Paper style={{
                    backgroundColor: lightGreen[200], height: 700, width: 1000, paddingTop: 30, marginTop: 50,
                    marginLeft: 280,borderRadius: 16
                }}>
                    <Typography style={{ color: teal[800], fontSize: 30, fontWeight: 700 }}>Imprint</Typography>
                    <Typography style={{ color: teal[800], fontSize: 17, fontWeight: 700, marginTop: 100 }}>Practice Miller</Typography>
                    <Typography style={{ color: teal[800], fontSize: 17, fontWeight: 500, marginTop:20 }}>Liebigstraße 62</Typography>
                    <Typography style={{ color: teal[800], fontSize: 17, fontWeight: 500 }}>64293 Darmstadt </Typography>
                    <Typography style={{ color: teal[800], fontSize: 17, fontWeight: 500 }}>Germany</Typography>
                    <Typography style={{ color: teal[800], fontSize: 17, fontWeight: 500, marginTop: 50 }}>Phone: 01745687998</Typography>
                    <Typography style={{ color: teal[800], fontSize: 17, fontWeight: 500, marginTop: 15 }}>Email: info_praxismiller@web.de</Typography>
                    <Typography style={{ color: teal[800], fontSize: 17, fontWeight: 500, marginTop:50 }}>Service provider for the offer of this website is Practice Miller.</Typography>
                </Paper>
            </Paper>
        )
    }
}
