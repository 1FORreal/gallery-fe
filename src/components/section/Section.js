import "./Section.css"

import React from "react"
import Navbar from "../navbar/Navbar"
import { Route, Routes } from "react-router-dom"
import UploadPhotoForm from "../upload-photo-form/UploadPhotoForm"
import Gallery from "../gallery/Gallery"

class Section extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isGallery: false
        }
    }

    handleIsGallery() {
        const newIsGallery = (this.state.isGallery === true ? false : true)

        this.setState({
            isGallery: newIsGallery
        })
    }

    render() {
        return(
            <div className="border overflow-scroll" id="section-body">
                <Navbar/>
                <Routes>
                    <Route path="/hello"></Route>
                    <Route path="/upload-photo" element={<UploadPhotoForm/>}></Route>
                    <Route path="/gallery" element={<Gallery/>}></Route>
                </Routes>
            </div>

        )
    }
}

export default Section