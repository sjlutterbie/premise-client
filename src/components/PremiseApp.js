import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { connect }  from 'react-redux';

import Header from './Header';
import PremiseArea from './PremiseArea';
import UserGuide from './UserGuide';

import {updateWindowWidth} from '../actions';
import {getResponsiveBracket} from '../selectors/navSelectors';

export class PremiseApp extends Component{
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.updateWindowWidth(window.innerWidth);
    window.addEventListener('resize', () => {
                            this.props.updateWindowWidth(window.innerWidth)});
  }


  render() {
    return (
      <Router>
        <div className="premise-app">
          <Header />
          <main>
            <Route path="/premise" component={PremiseArea} />
            <Route path="/userguide" component={UserGuide} />
          </main>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  responsiveBracket: getResponsiveBracket(state)
});

export default connect(mapStateToProps, {updateWindowWidth})(PremiseApp);