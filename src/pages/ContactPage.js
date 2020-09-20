import React, { Component } from 'react';

import SocialMedias from '../Components/SocialMedias';
import Hero from '../Components/Hero';

class ContactPage extends Component {

  render() {
    return (
      <div>
        <Hero title={this.props.title} />

        <SocialMedias />
      </div>
    )
  }
}

export default ContactPage;