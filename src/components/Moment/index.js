import React from 'react';
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

export function Moment(props){
  // Expected Props:
  //  mode: 'read', 'actions', or 'create'
  //  moment: Object
  //    id: Unique identifier
  //    text: Moment content
  
    return (
      <div className="moment">
        <p className="moment-text"
           onClick={(momentId) => props.handleMomentTextClick(props.moment.id)}
           >{props.moment.content}</p>

        {props.mode === 'actions'
          ?
            <div className="action-buttons">
              <button className="open-create-mode"
                      onClick={(momentId) =>
                        props.updateFocalMomentMode('create')}>
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
        {props.mode === 'create'
          ?
            <form className="create-moment-form"
                  // DEV CODE TO PREVENT APP-RELOAD
                  onSubmit={(event) => {event.preventDefault()}}>
              <div className="fieldset-wrapper">
                <fieldset>
                  <div className="fieldset-contents">
                    <legend>Add to the story</legend>
                    <textarea></textarea>
                    <button className="cancel-create-moment"
                            onClick={() => 
                              props.updateFocalMomentMode('actions')}
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

const mapStateToProps = state => ({
  handleMomentTextClick
});

const mapDispatchToProps = {
  handleMomentTextClick,
  updateFocalMomentMode
};

export default connect(mapStateToProps, mapDispatchToProps)(Moment);