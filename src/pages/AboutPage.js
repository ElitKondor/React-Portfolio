import React from 'react';
import Hero from '../Components/Hero';
import Content from '../Components/Content';

function AboutPage(props) {

  return(
    <div>
      <Hero title={props.title} />

      <Content>
			<p>Hello, my name is Ruslan. I'm a Front-End engineer with experience in HTML, CSS, Bootstrap, SASS, JavaScript, jQuery and React.</p>

			<p>My dream is to one day start my own business and become an entrepreneur.</p>

			<p>I'm constantly learning new things. Currently those things include gaining more experience with JavaScript and React.</p>
    	</Content>
    </div>
  );

}

export default AboutPage;