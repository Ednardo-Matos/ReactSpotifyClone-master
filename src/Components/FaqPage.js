import React, {Component} from 'react';
import  { Accordion, Card, Button }  from  'react-bootstrap';
import logo from '../Logos/spotify.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import '../Styles/FaqPage.css';




export class FaqPage extends Component {
  render(){
    return (
      <>
      <div className="App">
          <header className="App-header">
            <nav className="nav-bar">
            <img className="App-logo" src={logo} alt="Logo" />
              <ul>
                <a href="#">Premium</a>
                <a href="#">Suporte</a>
                <a href="#">Baixar</a>
                <a>|</a>
                <a href="#">Inscrever-se</a>
                <a href="#">Entrar</a>
              </ul>
            </nav>
          </header>
        </div>
        <div>
          <Accordion className="App">
            <Card className="questions">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0" className="questionLink">
                  Click me!
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>Hello! I'm the body</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="questions">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1" className="questionLink">
                  Click me!
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1"> 
                <Card.Body>Hello! I'm another body</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
        </>
    )
  }
}
export default FaqPage;