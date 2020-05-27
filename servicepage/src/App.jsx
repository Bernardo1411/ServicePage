import React, { Component } from 'react';
import './App.scss'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Navigator from './components/Navgator'
import Form from './components/Form'
import Success from './components/success'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import UsersContextProvider from './context/usersContext'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <UsersContextProvider>
            <Navigator className="Navigator" />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />
              <Route path='/form' component={Form} />
              <Route path='/success' component={Success} />
            </Switch>
          </UsersContextProvider>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;