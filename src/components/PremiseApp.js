import React, {Component} from 'react';
import { connect }  from 'react-redux';

import Header from './Header';
import ReaderPane from './ReaderPane';
import NetworkPane from './NetworkPane';

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
      <div className="premise-app">
        <Header />
        <ReaderPane />
        <NetworkPane />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  responsiveBracket: getResponsiveBracket(state)
});

export default connect(mapStateToProps, {updateWindowWidth})(PremiseApp);