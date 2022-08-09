import React from "react";
import "./Footer.css";

class Footer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <div id="footer-body" className="d-flex justify-content-center align-items-center">
                <h1 className="">This is a footer!</h1>
            </div>
        )
    }
}

export default Footer