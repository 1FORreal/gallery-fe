import React from "react"
import "./App.css"
import Header from "./components/header/Header"
import { BrowserRouter as Router } from "react-router-dom"
import Gallery from "./components/gallery/Gallery"

class App extends React.Component{

  constructor(props){
    super(props)
  }

  render() {
    return(
      <Router>
        <div className="w-100 h-100" id="app-body">
          <Header/>
          <div className="" id="test-gallery">
            <Gallery/>
          </div>
        </div>
      </Router>
    )
  }
}

export default App