import React from 'react';
import { connect } from 'react-redux';

import './UserMenu.css';

export function UserMenu(props) {
 
  return(
    <div className="user-menu">
      <i className="material-icons">settings</i>

    </div>
  );
}

const mapStateToProps = state => ({
  showUserMenu: state.showUserMenu
});

export default connect(mapStateToProps)(UserMenu);


/*
class UserMenu extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false
    };
    
  }
  
  toggleMenu() {
    this.setState({showMenu: !this.state.showMenu});
  }
  
  render() {
    return (
      <div className="user-menu">
        <i className="material-icons"
           onClick={() => this.toggleMenu()}>settings</i>
        
        {
          this.state.showMenu
            ? (
              <ul>
                <li>Log Out</li>
              </ul>
            )
            : ( null )
        }
        
      </div>
    );
    
  }
  
} 


export default UserMenu;

*/