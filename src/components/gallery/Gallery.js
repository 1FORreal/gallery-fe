import "./Gallery.css"
import React from "react"
import axios from "axios"
import Card from "../card/Card"

const GET_PHOTOS_URL = "http://localhost:8080/photos"
const DEFAULT_PAGE_NUMBER = 0
const DEFAULT_PAGE_SIZE = 4

class Gallery extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            photos : [],
        }
    }

    componentDidMount() {
        const url = GET_PHOTOS_URL + "?page_number=" + DEFAULT_PAGE_NUMBER + "&page_size=" + DEFAULT_PAGE_SIZE
        
        axios.get(url).then(
            (response) => {
                this.setState({
                    photos: response.data
                })

            }
        )
    }

    handleScrollToBottom(event) {
        const target = event.target
        console.log("DA")

        if(target.scrollHeight - target.scrollTop === target.clientHeight) {
            console.log("END");
        }
    }

    listCards() {
        return this.state.photos.map((photo, index) => {
            return(
                <div className="container my-3 card-container" key={index}>
                    <Card photo={photo} key={index}/>
                </div>
            )
        })
    }


    render() {
        return(
            <div className="container-fluid overflow-scroll" onScroll={(event) => this.handleScrollToBottom(event)}>
                {this.listCards()}
            </div>
        )
    }
}

export default Gallery