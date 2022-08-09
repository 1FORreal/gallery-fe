import "./Header.css";

import React from "react";

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <div id="header-body" className="d-flex justify-content-center align-items-center">
                <h1 className="">This is a header!</h1>
            </div>
        )
    }
}

export default Header