import React from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
import { Link } from 'react-router-dom';

const WSNotification = props => { // eslint-disable-line no-unused-vars
  const { message, icon, iconColour, consumeNotification, index, url } = props;
  return (
    <>
      <div className="dropdown-divider"/>
      <a className="dropdown-item" onClick={() => consumeNotification(index)}>
        <Link to={url || '#'}>
            <i className={`fas ${icon || 'fa-users'} `} /> {message}
        </Link>
        <ReactTooltip id={`ws-${index}`} place="top" type="dark" effect="float" />
      </a>
    </>
  );
};

WSNotification.propTypes = {
  message: PropTypes.string.isRequired,
  icon: PropTypes.string,
  iconColour: PropTypes.string,
  consumeNotification: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  url: PropTypes.string
};

export default WSNotification;
