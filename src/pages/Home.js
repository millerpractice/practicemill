import React, { Component } from 'react';
import Header from "../Header.js"
import Logo from "../Logo"
import Welcome from "../Welcome"
import About from "../Aboutus"
import Team from "../Team"
import Contact from '../Contact.js';
import Footer from "../Footer"
import Paper from '@material-ui/core/Paper';



export default class Home extends Component {

    render() {
        return (
<Paper style ={{overflowX:"hidden"}}>
<Header></Header>
<Logo></Logo>
<Welcome></Welcome>
<About></About>
<Team></Team>
<Contact></Contact>
<Footer/>
</Paper>
        )
    }
}
