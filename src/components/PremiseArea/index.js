import React, {Component} from 'react';
import {connect} from 'react-redux';

import requiresLogin from '../RequiresLogin';

import {loadStoryNetwork, getMaxEndpoint} from '../../actions';


import './PremiseArea.css';

// <PremiseArea /> contains the overall interface when interacting with a single
//  storyNetwork. This represents one of the core areas of the site, along with
//  <UserGuide /> and, eventually a central area for choosing storyNetworks, etc.

import ReaderPane from '../ReaderPane';
import NetworkPane from '../NetworkPane';

// DEV CODE:
  const storyNetwork = '5c3f69ed0b2b900017fb69eb';

export class PremiseArea extends Component{
  // Expected props:
  //  State elements:
  //    visiblePanes (array)
  
  componentWillMount() {
    this.props.loadStoryNetwork(storyNetwork);
    this.props.getMaxEndpoint(storyNetwork);
  }
  
  render() {
    return (
      <div className="premise-area">
        {this.props.visiblePanes.includes('network')
          ? (<div className="networkpane-wrapper rct-networkpane-wrapper">
               <NetworkPane />
             </div>)
          : (null)
        }
        {this.props.visiblePanes.includes('reader')
          ? (<div className="readerpane-wrapper rct-readerpane-wrapper">
               <ReaderPane />
             </div>)
          : (null)
        }
      </div>
    );
  }

}

const mapStateToProps = state => ({
  visiblePanes: state.navState.visiblePanes
});

const mapDispatchToProps = {
  loadStoryNetwork,
  getMaxEndpoint
};

export default requiresLogin()(
  connect(mapStateToProps, mapDispatchToProps)(PremiseArea));