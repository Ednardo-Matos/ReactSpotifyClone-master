
import '../Styles/App.css';
// import  Playlist  from './Playlist';
import React, {Component} from "react";
import Home from './Home'
import  FaqPage  from './FaqPage';
import logo from '../Logos/spotify.svg';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Playlist from './Playlist';
import Foot from './Footer'



export class App extends Component{
  render(){
    return (
      <>
      <Router>
      <div>
        <header className="App-header">
          <nav className="nav-bar">
          <img className="App-logo" src={logo} alt="Logo" />
            <ul>
              <Link to="/">Home</Link>
              <Link to="/FaqPage">FAQ</Link>
              <a>|</a>
              <Link to="/">Inscrever-se</Link>
              <Link to="/Playlist">Entrar</Link>
            </ul>
          </nav>
        </header>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          
          <Route path="/FaqPage" component={FaqPage} />
          <Route path="/Playlist" component={Playlist}/>
          {<Route path="/" component={Home} /> }
        </Switch>
      </div>
    </Router>
    <Foot />
    </>
    )
  }
}    

export default App