import React from 'react';
import style from '../css/about.css';
import image from '../img/sushi.jpg';

class About extends React.Component {

  render() {
    return(
        <div className="container" style={style}>
          <div className="description" style={style}>
            <div className="about_text" style={style}>
              As a local business, we're dedicated to providing an enjoyable experience
              for the community. Our delicious sushi is crafted with the freshiest fish
              and our entree dishes are catered to give you a meal like no other. Take the night off
              with friends, family and loved ones and join us!
            </div>
          </div>
          <div className="about-image" style={style}>
            <img style={{width: "100%"}} src={image} alt="sushi"/>
          </div>
        </div>
    );
  }
}

export default About;
