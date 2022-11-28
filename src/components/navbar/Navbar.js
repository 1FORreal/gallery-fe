import "./Navbar.css"

import React from "react"
import NavbarButton from "./navbar-button/NavbarButton"

class Navbar extends React.Component{
    
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="border" id="navbar-body">
                <div className="d-flex">
                    <NavbarButton name="Upload photo" link="/upload-photo"/>
                    <NavbarButton name="Gallery" link="/gallery"/>
                </div>
            </div>
        )
    }
}

export default Navbar