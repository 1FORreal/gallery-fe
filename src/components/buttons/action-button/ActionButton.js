import "./ActionButton.css"
import React from "react"

class ActionButton extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: null,
            action: null,
        }
    }

    static getDerivedStateFromProps(props,state) {
        return {
            name: props.name,
            action: props.action,
        }
    }

    componentDidMount() {

    }

    render() {
        return(
            <button className="btn btn-primary" type="button" onClick={this.state.action}>{this.state.name}</button>
        )
    }
}

export default ActionButton