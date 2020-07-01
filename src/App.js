import React,{Component} from 'react';
//import './App.css';
import Nav from './Component/Nav'
import Home from './Component/Home'
import About from './Component/About'
import {BrowserRouter,Route} from 'react-router-dom'

class App extends Component {
 render(){
  return (
    <BrowserRouter>
      <div className="App">
        <Nav/>
        <Route exact path='/' component ={Home}/>
        <Route path='/about' component = {About}/>

      </div>
    </BrowserRouter>
  )
 }
}

export default App;
