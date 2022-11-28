import "./Card.css"

import React from "react";

const GET_PHOTO_FILE_LINK = "http://localhost:8080/files/"

class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            photo: {
                id: "",
                title: "",
                description: "",
                fileProperties: {
                    filename: "",
                },
                creationDate: "",
                modificationDate: "",
            },
            link: ""
        }
    }

    static getDerivedStateFromProps(props, state) {
        return {
            photo: props.photo,
            link: GET_PHOTO_FILE_LINK + props.photo.fileProperties.filename
        }
    }

    render() {
        return(
            <div className="card w-100 p-1 overflow-hidden" id="card-main">
                <div className="p-1">
                    <img src={this.state.link} className="card-img-top rounded" id="card-image" alt="SMT"/>
                </div>
                <div className="card-body h-25">
                    <h5 className="card-title">
                        {this.state.photo.title}
                    </h5>
                    <p className=" fs-6 card-text text-description">
                        {this.state.photo.description}
                    </p>
                </div>
            </div>
        )
    }
}

export default Card