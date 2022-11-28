import "./Footer.css"

import React from "react"

class Footer extends React.Component{

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="container-fluid border" id="footer-body">
                <div className="d-flex justify-content-center align-items-center h-100">
                    <h3>Footer</h3>
                </div>
            </div>
        )
    }
}

export default Footer