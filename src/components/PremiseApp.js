import React, {Component} from 'react';
import { connect }  from 'react-redux';

import Header from './Header';
import ReaderPane from './ReaderPane';
import NetworkPane from './NetworkPane';

import {updateWindowWidth} from '../actions';

export class PremiseApp extends Component{
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.updateWindowWidth(window.innerWidth);
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

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {updateWindowWidth})(PremiseApp);