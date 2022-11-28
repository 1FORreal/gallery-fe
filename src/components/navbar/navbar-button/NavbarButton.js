import "./NavbarButton.css"

import React from "react"

class NavbarButton extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "",
            link: "",
        }
    }

    static getDerivedStateFromProps(props, state) {
        return {
            name: props.name,
            link: props.link
        }
    }



    render() {
        return(
            <div className="d-flex justify-content-center align-items-center h-100 w-100" id="navbar-button-body">
                <a href={this.state.link} className="h-100" id="navbar-button-link">{this.state.name}</a>
            </div>
        )
    }
}

export default NavbarButton