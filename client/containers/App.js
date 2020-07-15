import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RouteTransition } from 'react-router-transition';
import { Cookies } from 'react-cookie';
import PropTypes from 'prop-types';

import Header from '../components/admin-lte/Header.js';
import Sidebar from '../components/admin-lte/Sidebar.js';
import RightSidebar from '../components/admin-lte/RightSidebar.js';
import Footer from '../components/admin-lte/Footer.js';
import Notifications from './Notifications';
import { emitProfileRequest, consumeNotification } from '../actions/appActions';

import { getActivePermissions, becomeAnotherUser, becomeSelf } from '../actions/permissionActions';

function mapStateToProps(state) {
  // Select emails from activePermissions

  const activePermissionsEmails = state.activePermissions.activePermissions.map(x => ({ ...x, email: x.fromUserEmail }));

  return {
    user: state.profile.user,
    ws_notification: state.profile.ws_notification,

    isGettingActivePermissions: state.activePermissions.isGetting,
    activePermissionsEmails,

    accountForm: state.form.activeAccount,
    activeAccount: state.activeAccount
  };
}

const mapDispatchToProps = { emitProfileRequest, consumeNotification, getActivePermissions, becomeAnotherUser, becomeSelf };

export class AppComponent extends Component {

  static propTypes = {
    children: PropTypes.element.isRequired,
    // redux
    user: PropTypes.object,
    ws_notification: PropTypes.array.isRequired,
    isGettingActivePermissions: PropTypes.bool.isRequired,
    activePermissionsEmails: PropTypes.array.isRequired,
    accountForm: PropTypes.object,
    activeAccount: PropTypes.object.isRequired,
    // actions
    emitProfileRequest: PropTypes.func.isRequired,
    consumeNotification: PropTypes.func.isRequired,
    getActivePermissions: PropTypes.func.isRequired,
    becomeAnotherUser: PropTypes.func.isRequired,
    becomeSelf: PropTypes.func.isRequired,
    // router
    route: PropTypes.object,
    location: PropTypes.object
  }

  static contextTypes = {
    router: PropTypes.object
  }

  constructor() {
    super();
    this.changeAccount = this.changeAccount.bind(this);
    this.changeAccountToSelf = this.changeAccountToSelf.bind(this);
  }

  componentWillMount() {
    this.props.emitProfileRequest();
    // Before component mount, if the 'user' cookie key exists but this.props.activeAccount.email === undefined then we need to delete this property
    // As it's no longer in sync with the app's state and will incorrectly inform the server to use permissions to another user's account
    if (!this.props.activeAccount.email) {
      Cookies.remove('user', { path: '/' });
    }
    if (!Cookies.load('user') && this.props.activeAccount.email) {
      Cookies.set('user', this.props.activeAccount.id, { path: '/' });
    }
  }

  componentDidMount() {
    this.props.getActivePermissions();
  }

  pushToDashboardOrRefresh() {
    // Push to dashboard or refresh page
    if (this.props.location.pathname === '/')
      this.context.router.replace('/');
    else
      this.context.router.push('/');
  }

  changeAccount() {
    const thisAccount = this.props.activePermissionsEmails.find(x => x.email === this.props.accountForm.values.email);
    // @thisAccount { email, id }
    this.props.becomeAnotherUser(thisAccount);
    this.pushToDashboardOrRefresh();
  }

  changeAccountToSelf() {
    this.props.becomeSelf();
    this.pushToDashboardOrRefresh();
  }

  render() {
    const { location, isGettingActivePermissions, activePermissionsEmails, activeAccount, ws_notification, consumeNotification, user } = this.props;
    return (
      <div className="wrapper">
        <Header user={user} ws_notification={ws_notification} consumeNotification={consumeNotification} />
        <Sidebar user={user} activeAccount={activeAccount} />

        <div className="content-wrapper">
          <RouteTransition
            pathname={location.pathname}
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 2 }}
            atActive={{ opacity: 1 }}
            mapStyles={styles => styles.opacity > 1 ? { "display": "none" } : { "opacity": styles.opacity }} >
            {this.props.children}
          </RouteTransition>
        </div>

        <Notifications />
        <Footer />
        <RightSidebar activeAccount={activeAccount} changeAccountToSelf={this.changeAccountToSelf} changeAccount={this.changeAccount} isGettingActivePermissions={isGettingActivePermissions} activePermissionsEmails={activePermissionsEmails} />
        <div className="control-sidebar-bg" />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
