import React, { PropTypes } from 'react';
import WSNotification from './WS-Notification';

import '../../styles/header.scss';

const Header = props => { // eslint-disable-line no-unused-vars
  const { user, ws_notification, consumeNotification } = props;
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#">
            <i className="fas fa-bars" />
          </a>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto">

        <li className="nav-item dropdown">
          <a href="#" className="nav-link" data-toggle="dropdown" aria-expanded="false" >
            <i className="far fa-bell" />
            <span className="badge badge-warning navbar-badge">{ws_notification.length || ''}</span>
          </a>
          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <span className="dropdown-header">You have {ws_notification.length || 'no new'} notification{ws_notification.length === 1 ? '' : 's'}</span>
            <div className="dropdown-divider" />
            {ws_notification.map((notification, i) => {
              return (
                <WSNotification key={`ws-notification${i}`}
                  url={notification.url}
                  message={notification.message}
                  consumeNotification={consumeNotification}
                  index={i} icon={notification.icon}
                  iconColour={notification.iconColour} />
              );
            })}

            <div className="dropdown-divider" />
            <a href="#" className="dropdown-item dropdown-footer">See All Notifications</a>
          </div>
        </li>

        <li className="nav-item dropdown">
          <a href="#" className="nav-link" data-toggle="dropdown" aria-expanded="false" >
            <i className="far fa-user" />
          </a>

          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <a href="#" className="dropdown-item">

              <div className="media">
                <img className="img-size-50 mr-3 img-circle" src={user.picture} alt="User Image" />

                <div className="media-body">
                  <h3 className="dropdown-item-title">
                    {user.name}
                  </h3>
                  <p>{user.email}</p>
                </div>
              </div>
            </a>
            <div className="dropdown-divider" />
            <a href="#" className="dropdown-item">
              <a className="btn btn-block btn-danger" href="/logout">Sign out</a>
            </a>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
          <i className="fas fa-cogs" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

Header.propTypes = {
  user: PropTypes.object,
  ws_notification: PropTypes.array.isRequired,
  consumeNotification: PropTypes.func.isRequired
};

export default Header;
