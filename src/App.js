import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ActionButton from './components/buttons/action-button/ActionButton';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

function App() {

  const myFunction = (event) => {
      console.log("It works!")
  }


  return (
    <div id="application-body">
        <Header/>
        <div className="m-3">
          <ActionButton name="Action" ActionButton={myFunction}></ActionButton>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
