import React from 'react';
import { connect } from 'react-redux';

import './UserMenu.css';
import {setUserMenuView, clearAuth} from '../../actions';
import {clearAuthToken} from '../../local-storage';


export function UserMenu(props) {
 
  function logOut() {
    props.clearAuth();
    clearAuthToken();
    props.setUserMenuView(!props.showUserMenu);
  }
 
  return(
    <div className="user-menu">
      <i className="material-icons user-menu-toggle"
         onClick={() =>
          props.setUserMenuView(!props.showUserMenu)}>settings</i>
      
      {
        props.showUserMenu
          ? (
            <ul>
              <li className="rct-log-out" onClick={() => logOut()}>Log Out</li>
            </ul>
          )
          : (null)
        
      }

    </div>
  );
}

const mapStateToProps = state => ({
  showUserMenu: state.navState.showUserMenu
});

const mapDispatchToProps = {
  clearAuth,
  setUserMenuView
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);