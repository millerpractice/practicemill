import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import pic from './welcome.jpg';
import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'

export default class Welcome extends Component{

    render(){
        return(
            configureAnchors({offset: -10}),
            <ScrollableAnchor id={'welcome'}>
<Paper square={true} style={{height:553}}>
    <img src={pic} alt="welcome" style={{width:1519.2}}/>
</Paper>
</ScrollableAnchor>
        )
    }
}

