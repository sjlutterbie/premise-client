import React from 'react';
import './LocationBar.css';

export default function LocationBar(props) {
  
  return (
    
    <div className="location-bar">
      {props.location}
    </div>
    
  );

}