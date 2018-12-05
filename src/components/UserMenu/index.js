import React from 'react';
import { connect } from 'react-redux';

import './UserMenu.css';
import {setUserMenuView} from '../../actions';

export function UserMenu(props) {
 
  return(
    <div className="user-menu">
      <i className="material-icons user-menu-toggle"
         onClick={() =>
          props.dispatch(
            setUserMenuView(!props.showUserMenu)
          )}>settings</i>
      
      {
        props.showUserMenu
          ? (
            <ul>
              <li>Log Out</li>
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

export default connect(mapStateToProps)(UserMenu);