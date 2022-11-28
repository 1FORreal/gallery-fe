import "./UploadPhotoForm.css"

import React from "react"
import axios from "axios"

const DEFAULT_POST_PHOTO = "http://localhost:8080/photos"

class UploadPhotoForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            photo: {
                title: "",
                description: "",
            },
            isFileSelected: false,
            file: null,
        }
    }

    handleTitle(event) {
        this.setState({
            photo: {
                title: event.target.value,
                description: this.state.photo.description
            }
        })
    }

    handleDescription(event) {
        this.setState({
            photo: {
                title: this.state.photo.title,
                description: event.target.value
            }
        })
    }

    handleFile(event) {
        this.setState({
            file: event.target.files[0],
            isFileSelected: true,
        })
    }

    handleForm(event) {
        event.preventDefault()

        const url = DEFAULT_POST_PHOTO
        const formData = new FormData()
        const config = {
            headers: {
                "Accept" : "application/json",
                "Content-Type" : "multipart/form-data"
            }
        }

        formData.append("photo_details", JSON.stringify(this.state.photo))
        formData.append("file", this.state.file, this.state.file.name)

        axios({
            method: "post",
            url: url,
            data: formData
        }).then(
            (response) => {
                console.log("DA")
            }
        ).catch((error) => {
            console.log(error.message)
        })

    }

    render() {
        return(
            <form className="d-flex flex-column border overflow-scroll" id="upload-photo-form-body">
                <div className="m-3">
                    <label className="form-label">Title</label>
                    <input type="text" className="form-control" onChange={(event) => this.handleTitle(event)} value={this.state.photo.title}/>
                </div>
                <div className="m-3">
                    <label className="form-label">Description</label>
                    <textarea className="form-control" id="upload-photo-form-textarea" onChange={(event) => this.handleDescription(event)} value={this.state.photo.description}/>
                </div>
                <div className="m-3">
                    <label className="form-label">Photo</label>
                    <input type="file" className="form-control" accept="image/png, image/jpg, image/jpg" onChange={(event) => this.handleFile(event)}></input>
                </div>
                <div className="mt-auto mb-3 mx-3">
                    <button type="button" className="btn btn-primary" onClick={(event) => this.handleForm(event)}>Submit</button>
                </div>

            </form>
        )
    }
}

export default UploadPhotoForm