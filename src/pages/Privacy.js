import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import lightGreen from '@material-ui/core/colors/lightGreen';
import Typography from '@material-ui/core/Typography';


export default class Privacy extends Component {

    render() {
        return (
            <Paper square={true} style={{ height: 1000, width: 1519.2, backgroundColor: lightGreen[100], position: "absolute" }}>
                <Paper style={{ height: 850, width: 1000, backgroundColor: lightGreen[200], paddingTop: 30, marginTop: 50,
                marginLeft: 280,borderRadius: 16 }}>
                    <Typography style={{color:"white", fontSize:25, fontWeight:700}}> Privacy Policy Terms </Typography>
                    <Typography style={{color:"white", fontSize:17, fontWeight:500, marginTop: 20,
    textAlign: 'left', marginRight: 50, marginLeft: 50}}>This privacy policy will help you understand
                         how we use and protects the data you provide to us when
                         you visit and use our website.</Typography>
                    <Typography style={{color:"white", fontSize:17, fontWeight:500, textAlign: 'left', marginRight: 50, marginLeft: 50}}>We reserve the right to change this policy at
                        any given time, of which you will be promptly updated.
                        If you want to make sure that you are up to date with the
                              latest changes, we advise you to frequently visit this page.</Typography>
                    <Typography style={{color:"white", fontSize:25, fontWeight:700, marginTop: 30}}>Safeguarding and Securing the Data</Typography>
                    <Typography style={{color:"white", fontSize:17, fontWeight:500,marginTop: 20, textAlign: 'left', marginRight: 50, marginLeft: 50}}>We are committed to securing your data and keeping it
                        confidential. We had done all in our power to prevent data theft,
                         unauthorized access, and disclosure by implementing the latest technologies
                                    and software, which help us safeguard all the information we collect online.</Typography>
                    <Typography style={{color:"white", fontSize:25, fontWeight:700, marginTop: 30}}>Our Cookie Policy</Typography>
                    <Typography style={{color:"white", fontSize:17, fontWeight:500, marginTop: 20,textAlign: 'left', marginRight: 50, marginLeft: 50}}>Once you agree to allow our website to use cookies,
                         you also agree to use the data it collects regarding your online behavior
                                          (analyze web traffic, web pages you spend the most time on, and websites you visit).</Typography>
                    <Typography style={{color:"white", fontSize:17, fontWeight:500, textAlign: 'left', marginRight: 50, marginLeft: 50}}>The data we collect by using cookies is used to customize our website to
                        your needs. After we use the data for statistical analysis, the data is completely
                                              removed from our systems.</Typography>
                    <Typography style={{color:"white", fontSize:17, fontWeight:500, textAlign: 'left', marginRight: 50, marginLeft: 50}}>Please note that cookies don't allow us to gain control of your
                        computer in any way. They are strictly used to monitor which pages you find
                                                   useful and which you do not so that we can provide a better experience for you.</Typography>
                    <Typography style={{color:"white", fontSize:17, fontWeight:500, textAlign: 'left', marginRight: 50, marginLeft: 50}}>If you want to disable cookies, you can do it by accessing the settings
                                                       of your internet browser. (Provide links for cookie settings for major internet browsers).</Typography>
                    <Typography style={{color:"white", fontSize:25, fontWeight:700, marginTop: 30}}>Restricting the Collection of your Personal Data</Typography>
                    <Typography style={{color:"white", fontSize:17, fontWeight:500,marginTop: 20, textAlign: 'left', marginRight: 50, marginLeft: 50}}>We will not lease, sell or distribute your personal information to any
                         third parties, unless we have your permission. We might do so if the law forces us.
                          Your personal information will be used when we need to send you promotional materials
                                                              if you agree to this privacy policy.</Typography>
                </Paper>
            </Paper>
        )
    }
}