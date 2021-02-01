import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './Components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Ruslan Mjahcich',
      headerLinks: [
        { title: 'Home', path: '/React-Portfolio/home' },
        { title: 'About', path: '/React-Portfolio/about' },
        { title: 'Contact', path: '/React-Portfolio/contact' }
      ],
      home: {
        title: 'Be Purposeful',
        subTitle: 'Projects that excite the imagination.',
        text: 'Checkout my projects below'
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Let\'s Talk'
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>

          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Ruslan Mjahcich</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/React-Portfolio/home">Home</Link>
                <Link className="nav-link" to="/React-Portfolio/about">About</Link>
                <Link className="nav-link" to="/React-Portfolio/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/React-Portfolio/home" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/React-Portfolio/about" render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/React-Portfolio/contact" render={() => <ContactPage title={this.state.contact.title} />} />
          
          <Footer />

        </Container>
      </Router>
    );
  }
}

export default App;
