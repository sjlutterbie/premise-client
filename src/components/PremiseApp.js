import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { connect }  from 'react-redux';

import Header from './Header';
import PremiseArea from './PremiseArea';
import UserGuide from './UserGuide';
import MobileNav from './MobileNav';
import LandingPage from './LandingPage';

import {loadDefaultBranch, monitorResponsiveBracket,
        refreshAuthToken} from '../actions';

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
  // Expected props:
  //  Actions:
  //    loadDefaultBranch
  //    updateWindowWidth
  //  State values:
  //    responsiveBracket (string)
  //    visiblePanes (array)
  
  
  componentWillMount() {
    this.props.loadDefaultBranch(DEV_BRANCH);
    this.props.monitorResponsiveBracket(window.innerWidth);
    
    window.addEventListener('resize',
    () => {this.props.monitorResponsiveBracket(window.innerWidth)});
  }
  
  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
      this.startPeriodicRefresh();
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
      this.stopPeriodicRefresh();
    }
  }
  
  componentWillUnmount() {
    this.stopPeriodicRefresh();
  }
  
  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.refreshAuthToken(),
      60 * 60 * 1000
    );
  }

  render() {
    return (
      <Router>
        <div className="premise-app">
          <Header />
          <main>
            {this.props.visiblePanes.includes('mobileNav')
              ? (<div className="rct-mob-nav-wrapper">
                   <MobileNav/>
                 </div>)
              : (null)
            }
            {this.props.visiblePanes.includes('userguide')
              ? (<div className="userguide-wrapper rct-userguide-wrapper">
                  <UserGuide />
                 </div>)
              : (null)
            }
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/premisearea" component={PremiseArea} />
          </main>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  visiblePanes: state.navState.visiblePanes
});

const mapDispatchToProps = {
  loadDefaultBranch,
  monitorResponsiveBracket,
  refreshAuthToken
};

export default connect(mapStateToProps,mapDispatchToProps)(PremiseApp);