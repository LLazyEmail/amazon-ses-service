import React, { PropTypes, Component } from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { withCookies } from 'react-cookie';

import App from './containers/App';
// Dashboard
import Dashboard from './containers/Dashboard';

// Campaigns
import CreateCampaign from './containers/campaigns/CreateCampaign';
import ManageCampaigns from './components/campaigns/ManageCampaigns';
import CampaignView from './containers/campaigns/CampaignView';
// Templates
import CreateTemplate from './containers/templates/CreateTemplate';
import ManageTemplates from './containers/templates/ManageTemplates';
import TemplateView from './containers/templates/TemplateView';

// Lists
import CreateList from './containers/lists/CreateList';
import ManageLists from './components/lists/ManageLists';
import ManageListSubscribers from './containers/lists/ManageListSubscribers';
// Analytics
import CampaignReports from './containers/analytics/CampaignReports';
// Accounts Management
import CreateAccount from './containers/accountsManagement/CreateAccount';
import DeleteAccount from './containers/accountsManagement/DeleteAccount';
// Permissions
import GrantPermissions from './containers/permissions/GrantPermissions';
import OfferedPermissions from './containers/permissions/OfferedPermissions';
import ReceivedPermissions from './containers/permissions/ReceivedPermissions';
// Settings
import Settings from './containers/Settings';

// import AddEmail from './containers/AddEmail';
import NotFound from './components/404';

const mapStateToProps = (state) => ({
  activeAccount: state.activeAccount
});
const CampaignsRoutes = () => {
  return (
    <Switch>
      <Route path="/campaigns/create" component={CreateCampaign} />
      <Route exact path="/campaigns/manage" component={ManageCampaigns} />
      <Route path="/campaigns/manage/:slug" component={CampaignView} />
    </Switch>
  )
};

const TemplatesRoutes = () => {

  return (
    <Switch>
      <Route path="/templates/create" component={CreateTemplate} />
      <Route exact path="/templates/manage" component={ManageTemplates} />
      <Route path="/templates/manage/:slug" component={TemplateView} />
    </Switch>
  );
};

const ListsRoutes = () => (
  <Switch>
    <Route path="/lists/create" component={CreateList} />
    <Route exact path="/lists/manage" component={ManageLists} />
    <Route path="/lists/manage/:listId" component={ManageListSubscribers} />
  </Switch>
);

const AnalyticsRoutes = () => (
  <Switch>
    <Route path="/analytics/reports" component={CampaignReports} />
  </Switch>
);

const AccountsManagementRoutes = () => (
  <Switch>
    <Route path="/accountsManagement/createAccount" component={CreateAccount} />
    <Route path="/accountsManagement/deleteAccount" component={DeleteAccount} />
  </Switch>
);

const PermissionsRoutes = () => (
  <Switch>
    <Route path="/permissions/grant" component={GrantPermissions} />
    <Route path="/permissions/offered" component={OfferedPermissions} />
    <Route path="/permissions/received" component={ReceivedPermissions} />
  </Switch>
);

function OnEnter({ onEnter, ...rest }) {
  return onEnter() ? (<Route {...rest} />) : (<Redirect to={{ pathname: '/404' }} />);
}

class RouterConfig extends Component {

  static propTypes = {
    // redux
    activeAccount: PropTypes.object.isRequired,
    // props
    history: PropTypes.object.isRequired
  }

  constructor() {
    super();
    this.onEnter = this.onEnter.bind(this);
  }

  onEnter() {
    const accountIsActive = !!this.props.activeAccount.email;
    const { pathname } = this.props.location;
    
    if (accountIsActive) {
      const urlPathLength = pathname.length;
      if (urlPathLength === 1) { // Is dashboard
        return false
      }
      else {
        if (!this.props.activeAccount[pathname] || this.props.activeAccount[pathname] === 'none') {
          return false;
        }
      }
    }
    return true;
  }
  render() {

    const { history, location} = this.props;

    return (
      <>
        <App history={history} location={location}>
          <Switch>
            <OnEnter path="/" exact onEnter={this.onEnter} component={Dashboard} />

            <OnEnter path="/campaigns" onEnter={this.onEnter} component={CampaignsRoutes} />
            <OnEnter path="/templates" onEnter={this.onEnter} component={TemplatesRoutes} />
            <OnEnter path="/lists" onEnter={this.onEnter} component={ListsRoutes} />
            <OnEnter path="/analytics" onEnter={this.onEnter} component={AnalyticsRoutes} />
            <OnEnter path="/accountsManagement" onEnter={this.onEnter} component={AccountsManagementRoutes} />
            <OnEnter path="/permissions" onEnter={this.onEnter} component={PermissionsRoutes} />

            <Route path="/settings" component={Settings} />
            <Route path="*" component={NotFound} />
          </Switch>
        </App>
      </>
    );
  }
}

const ConnectedRouterConfig = withCookies(connect(mapStateToProps, null)(RouterConfig));

export default function (props) {
  const { history } = props;

  return (
    <Router history={history}>
      <Route path="/" component={ConnectedRouterConfig} />
    </Router>
  )
}