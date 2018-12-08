import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { connect }  from 'react-redux';

import Header from './Header';
import PremiseArea from './PremiseArea';
import UserGuide from './UserGuide';
import MobileNav from './MobileNav';

import {updateWindowWidth, loadDefaultBranch} from '../actions';
import {getResponsiveBracket} from '../selectors/navSelectors';

// START DEV CODE
  
  // Generate a random storyBranch when initiating the app
  import faker from 'faker';
  
  let DEV_BRANCH = [];
  const momentCount = Math.floor(Math.random() * 50) + 1;
  for (let i = 0; i < momentCount; i++) {
    DEV_BRANCH.push({
      id: faker.random.uuid(),
      text: faker.lorem.sentences(3)
    });
  }
  
// END DEV CODE

export class PremiseApp extends Component{

  componentWillMount() {
    this.props.loadDefaultBranch(DEV_BRANCH);
    this.props.updateWindowWidth(window.innerWidth);
    window.addEventListener('resize',
      () => {this.props.updateWindowWidth(window.innerWidth);});
  }

  render() {
    return (
      <Router>
        <div className="premise-app">
          <Header />
          <main>
            {this.props.responsiveBracket === 'mobile'
              ? (<div className="mob-nav-wrapper">
                   <MobileNav/>
                 </div>)
              : (null)
            }
            
            {this.props.visiblePanes.includes('reader')
              ? (<div className="reader-wrapper">
                   <PremiseArea />
                 </div>)
              : (null)
            }

            <UserGuide />
          </main>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  responsiveBracket: getResponsiveBracket(state),
  visiblePanes: state.navState.visiblePanes
});

const mapDispatchToProps = {
  updateWindowWidth,
  loadDefaultBranch
};

export default connect(mapStateToProps,mapDispatchToProps)(PremiseApp);