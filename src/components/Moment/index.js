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
        <div className="action-buttons">
          <button className="open-create-mode">Create</button>
          <button className="switch-story-branch">Switch branch</button>
        </div>
        <form className="create-moment-form">
          <fieldset>
            <legend>Add to the story</legend>
            <textarea></textarea>
            <button className="cancel-create-moment">Cancel</button>
            <button className="create-moment">Create</button>
          </fieldset>
        </form>
      </div>
    );
  }  
  
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Moment);