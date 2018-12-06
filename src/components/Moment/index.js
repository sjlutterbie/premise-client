import React, {Component} from 'react';
import {connect} from 'react-redux';




export class Moment extends Component{
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="moment">
        <p className="moment-text">{this.props.moment.text}</p>
        <div className="action-buttons"></div>
        <div className="create-moment-form"></div>
      </div>
    );
  }  
  
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Moment);