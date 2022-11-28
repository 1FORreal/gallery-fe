import "./Header.css"

import React from "react"

class Header extends React.Component{

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="container-fluid border" id="header-body">
                <div className="d-flex justify-content-center align-items-center h-100">
                    <h3>Gallery</h3>
                </div>
            </div>
        )
    }
}

export default Header