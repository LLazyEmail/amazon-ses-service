/*eslint-disable react/prop-types*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
class SidebarTreeview extends Component {

  render() {
    return (
        <li className="nav-item has-treeview">
          <a href="#" className="nav-link">
            <i className={`fa ${this.props.icon} nav-icon`} /><p>{this.props.name}</p>
          </a>
          <ul className="nav nav-treeview">
            {this.props.children}
          </ul>
        </li>
    );
  }
}

SidebarTreeview.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default SidebarTreeview;
