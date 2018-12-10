import React from 'react';
import {connect} from 'react-redux';
import './LocationBar.css';

export function LocationBar(props) {
  // Expected props:
  //  State:
  //    currentLocation: string
  
  return (
    
    <div className="location-bar">
      {props.currentLocation}
    </div>
    
  );

}

const mapStateToProps = state => ({
  currentLocation: state.navState.currentLocation
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(LocationBar);