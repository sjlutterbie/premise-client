import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import { connect }  from 'react-redux';

import Header from './Header';
import PremiseArea from './PremiseArea';
import UserGuide from './UserGuide';

import {updateWindowWidth} from '../actions';
import {getResponsiveBracket} from '../selectors/navSelectors';

export class PremiseApp extends Component{

  componentDidMount() {
    this.props.updateWindowWidth(window.innerWidth);
    window.addEventListener('resize', () => {
                            this.props.updateWindowWidth(window.innerWidth)});
  }


  render() {
    return (
        <div className="premise-app">
          <Header />
          <main>
            <Switch>
              <Route path="/premise" component={PremiseArea} />
              <Route path="/userguide" component={UserGuide} />
            </Switch>
          </main>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  responsiveBracket: getResponsiveBracket(state)
});

export default connect(mapStateToProps, {updateWindowWidth})(PremiseApp);