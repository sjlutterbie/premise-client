import React, {Component} from 'react';
import './UserMenu.css';

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