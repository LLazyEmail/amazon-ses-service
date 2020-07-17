/*eslint-disable react/prop-types*/
import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import { match } from 'sinon';
class SidebarLink extends Component {
 
  
  render() {
    return (
      <NavLink {...this.props} isActive={(match, location) =>{
        // console.log("match", match);
        if (!match) {
          return false;
        }
      }}>
        <i className={`fa ${this.props.icon || 'fa-circle-o'}`}/><span>{this.props.children}</span>
      </NavLink>
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
