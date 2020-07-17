/*eslint-disable react/prop-types*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DisabledLink extends Component {

  render() {
    return (
      <li className="nav-item">
        <a className="nav-link" href="#">
          <i className={`nav-icon fas ${this.props.icon || 'fa-circle-o'}`} style={{ color: '#666666' }} />
          <p style={{ color: '#666666' }}>{this.props.children} Not active account</p>
        </a>
      </li>
    );
  }
}

DisabledLink.propTypes = {
  icon: PropTypes.string,
  children: PropTypes.string.isRequired
};

export default DisabledLink;
