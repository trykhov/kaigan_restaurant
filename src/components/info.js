import React from 'react';
import style from '../css/info.css';

class Info extends React.Component {
  render() {
    return(
      <div style={{padding: "10px", backgroundColor: "black", color: "white"}}>
        <h2> Contact & Location </h2>
        <div style={{display: "flex"}}>
          <div className="location">
            <h3> Location </h3>
            <p>3215 Oak Knoll Dr C </p>
            <p>Redwood City, CA 94062</p>
          </div>
          <div className="contact-info">
            <h3> Contact </h3>
            <p> Phone: (650) 549-8526 </p>
          </div>
          <div className="hours">
            <h3> Hours </h3>
            <p> Monday: Closed </p>
            <p> Tuesday: 11:30 AM - 2:30 PM, 5:00 PM - 9:00 PM </p>
            <p> Wednesday: 11:30 AM - 2:30 PM, 5:00 PM - 9:00 PM </p>
            <p> Thursday: 11:30 AM - 2:30 PM, 5:00 PM - 9:00 PM </p>
            <p> Friday: 11:30 AM - 2:30 PM, 5:00 PM - 9:00 PM </p>
            <p> Saturday: 11:30 AM - 2:30 PM, 5:00 PM - 9:00 PM </p>
            <p> Sunday: 11:30 AM - 2:30 PM, 5:00 PM - 9:00 PM </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
