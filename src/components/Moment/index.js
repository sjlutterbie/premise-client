import React, {Component} from 'react';
import {connect} from 'react-redux';

import './Moment.css';

import {
  handleMomentTextClick,
  updateFocalMomentMode,
  createMoment,
  switchBranch
} from '../../actions';

// Every <Moment/> has three modes: 'read', 'actions', and 'create'.
//  'read' mode is default, and just displays the moment text.
//  'action' mode is triggered by clicking on the moment when in 'read' mode,
//    and displays the "Switch branch" and "Create moment" buttons
//  'create' mode is triggered by clicking the "Create moment" branch, and
//    dispalys the "create moment" form
// The above modes are handled in store.navState because, at any time, only one
//  moment should be anything but 'read' mode. Additionally, 'create' mode is
//  default mode for the last <Moment/> in a story branch, and therefore needs
//  to be triggered above the component level.

export class Moment extends Component{
  // Expected Props:
  //  mode: 'read', 'actions', or 'create'
  //  moment: Object
  //    id: Unique identifier
  //    text: Moment content
  
  constructor(props) {
    super(props);
    
    this.state = {
      formValue: ''
    };
  }
  
  handleFormChange(event) {
    this.setState({formValue: event.target.value});
  }
  
  handleSubmit(event) {
    event.preventDefault();
    this.props.createMoment(this.props.moment, this.state.formValue);
  }
  
  render() {
  
    return (
      <div className="moment">
        <p className="moment-text"
           onClick={(momentId) =>
            this.props.handleMomentTextClick(this.props.moment._id)}>
              {this.props.moment.content}</p>

        {this.props.mode === 'actions'
          ?
            <div className="action-buttons">
              <button className="open-create-mode"
                      onClick={(momentId) =>
                        this.props.updateFocalMomentMode('create')}>
                Create
              </button>
              <button
                className="switch-story-branch"
                disabled={this.props.moment.children.length > 1 ? false : true }
                //DEV CODE
                onClick={() => this.props.switchBranch(this.props.moment)}>
                {this.props.moment.children.length > 1
                  ? 'Switch branches'
                  : 'On only branch'}
              </button>
            </div>
          : null
        }
        {this.props.mode === 'create'
          ?
            <form className="create-moment-form"
                  onSubmit={(event) => this.handleSubmit(event)}>
              <div className="fieldset-wrapper">
                <fieldset>
                  <div className="fieldset-contents">
                    <legend>Add to the story</legend>
                    <textarea
                      value={this.state.formValue}
                      onChange={(event) => this.handleFormChange(event)}>
                    </textarea>
                    <button className="cancel-create-moment"
                            onClick={() => 
                              this.props.updateFocalMomentMode('actions')}
                    >Cancel</button>
                    <button className="create-moment" type="submit">
                      Create
                    </button>
                  </div>
                </fieldset>
              </div>
            </form>
          : null
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  handleMomentTextClick
});

const mapDispatchToProps = {
  handleMomentTextClick,
  updateFocalMomentMode,
  createMoment,
  switchBranch
};

export default connect(mapStateToProps, mapDispatchToProps)(Moment);