import React, {Component} from 'react'
import NavBar from './Components/NavBar'
import News from './Components/News'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route exact path='/' element={ <News key='general' country='us' pageSize={15} category='general'/>}></Route>
          <Route exact path='/business' element={ <News key='business' country='us' pageSize={15} category='business'/>}></Route>
          <Route exact path='/entertainment' element={ <News key='entertainment' country='us' pageSize={15} category='entertainment'/>}></Route>
          <Route exact path='/health' element={ <News key='health' country='us' pageSize={15} category='health'/>}></Route>
          <Route exact path='/science' element={ <News key='science' country='us' pageSize={15} category='science'/>}></Route>
          <Route exact path='/sports' element={ <News key='sports' country='us' pageSize={15} category='sports'/>}></Route>
          <Route exact path='/technology' element={ <News key='technology' country='us' pageSize={15} category='technology'/>}></Route>
        </Routes>

      </BrowserRouter>
    
    )
  } key=''
}

export default App

