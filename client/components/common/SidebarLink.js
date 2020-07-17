/*eslint-disable react/prop-types*/
import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';

class SidebarLink extends Component {
 
  
  render() {
    return (
      <li className="nav-item">
        <NavLink {...this.props} isActive={(match, location) =>{
        console.log("match", match);
        if (!match) {
          return false;
        }
        if(!match.isExact){
          return false;
        }
        return true;
      }}
      activeClassName="active"
      className="nav-link"
      >
        <i className={`fa ${this.props.icon || 'fa-circle'} nav-icon`}/><p>{this.props.children}</p>
      </NavLink>
      </li>
      

      // <li className={this.context.router.isActive(this.props.to, true)
      //   ? 'active'
      //   : ''}>
      //   <Link {...this.props}>
      //     <i className={`fa ${this.props.icon || 'fa-circle-o'}`}/><span>{this.props.children}</span>
      //   </Link>
      // </li>
    );
  }
}

SidebarLink.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.string,
  children: PropTypes.string.isRequired
};

export default SidebarLink;
