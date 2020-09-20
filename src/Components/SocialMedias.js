import React, { Component } from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import telegram from '../assets/images/telegram.svg';
import linkedin from '../assets/images/linkedin.svg';
import facebook from '../assets/images/facebook.svg';

class SocialMedias extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          imgScr: linkedin,
          site: 'https://www.linkedin.com/in/ruslan-m-0362b3179/'
        },
        {
          id: 1,
          imgScr: facebook,
          site: 'https://www.facebook.com/profile.php?id=100005490491763'
        },
        {
          id: 2,
          imgScr: telegram,
          site: 'https://t.me/angrybaker'
        }
      ]
    }
  }

  makeLinks = (items) => {
    return items.map(item => {
      return <a href={item.site}> <img className="link-img" src={item.imgScr} alt=""/> </a>
    })
  }

  render() {
    return (
      <Jumbotron className="bg-transparent">
        <Container>
          <Row className="justify-content-around">
            {this.makeLinks(this.state.items)}
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}

export default SocialMedias;