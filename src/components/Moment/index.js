import React, {Component} from 'react';
import {connect} from 'react-redux';

import './Moment.css';

import {handleMomentTextClick, updateFocalMomentMode} from '../../actions';

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
      formValue: null
    };
  }
  
  render() {
  
    return (
      <div className="moment">
        <p className="moment-text"
           onClick={(momentId) =>
            this.props.handleMomentTextClick(this.props.moment.id)}>
              {this.props.moment.content}</p>

        {this.props.mode === 'actions'
          ?
            <div className="action-buttons">
              <button className="open-create-mode"
                      onClick={(momentId) =>
                        this.props.updateFocalMomentMode('create')}>
                Create
              </button>
              <button className="switch-story-branch"
                      //DEV CODE
                      onClick={() => alert(
                        'That tickles... but I don\'t work yet!')}
              >Switch branch</button>
            </div>
          : null
        }
        {this.props.mode === 'create'
          ?
            <form className="create-moment-form"
                  // DEV CODE TO PREVENT APP-RELOAD
                  onSubmit={(event) => {event.preventDefault()}}>
              <div className="fieldset-wrapper">
                <fieldset>
                  <div className="fieldset-contents">
                    <legend>Add to the story</legend>
                    <textarea
                      value={this.state.formValue}
                      onChange={(e) =>
                        this.setState({formValue:e.target.value})}>
                    </textarea>
                    <button className="cancel-create-moment"
                            onClick={() => 
                              this.props.updateFocalMomentMode('actions')}
                    >Cancel</button>
                    <button className="create-moment"
                            // DEV CODE
                            onClick={() => alert(
                              'That tickles... but I don\'t work yet!')}
                    >Create</button>
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
  updateFocalMomentMode
};

export default connect(mapStateToProps, mapDispatchToProps)(Moment);