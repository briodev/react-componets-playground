import React from 'react';
import './App.css';
import Routes from './routes';

import ASimpleComponent from './components/ASimpleComponent';
import NavBar from './components/navbar'

import Typography from 'typography'
import theme from './utils/typography-theme'
import injectFonts from 'typography-inject-fonts'

const typography = new Typography(theme)
typography.injectStyles()
injectFonts(typography)

const textVar = "This is a text variable"

class App extends React.Component  {

  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  render () {
    return (
    
        <div className="App">
              <NavBar />
              <div id="page-wrap">
                <div className="content">
                  <header className="App-header">
                    <h1>React</h1>
                    <p>{textVar}</p>
                  </header>
                  <ASimpleComponent />
                  <Routes />
                </div>
              </div>

        </div>

    )
  }
}

export default(App)
