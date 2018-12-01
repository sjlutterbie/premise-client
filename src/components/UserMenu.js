import React, {Component} from 'react';
import './UserMenu.css';

class UserMenu extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false
    };
    
  }
  
  
  render() {
    return (
      <div className="user-menu">
        <i class="material-icons">settings</i>
        
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