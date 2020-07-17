import React, { PropTypes, Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { Cookies, withCookies } from 'react-cookie';

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

// const MainRoute = () =>{
//   return (

//   )
// }

const TestComponent = (props) => {
  console.log("test");
  console.log("props", props);

  return (
    <div>Location {props.location.pathname}</div>
  )
};

const CampaignsRoutes = (props) => {
  console.log("campgainsRoutes");
  return (
    <Switch>
      <Route path="/campaigns/create" component={CreateCampaign} />
      <Route exact path="/campaigns/manage" component={ManageCampaigns} />
      <Route path="/campaigns/manage/:slug" component={CampaignView} />
    </Switch>
  )
};

const TemplatesRoutes = () => {
  console.log("templates routes");

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

  onEnter(nextState, replace) {
    const accountIsActive = !!this.props.activeAccount.email;
    if (accountIsActive) {
      const urlPathLength = nextState.routes.length;
      if (urlPathLength === 1) { // Is dashboard
        replace('/404');
      } else {
        if (!this.props.activeAccount[nextState.routes[1].path] || this.props.activeAccount[nextState.routes[1].path] === 'none') {
          replace('/404');
        }
      }
    }
  }

  render() {

    const { history, location, match } = this.props;
    console.log("history", history);

    return (
      <>
        <App history={history} location={location}>
          <Switch>
            <Route path="/" exact component={Dashboard} />

            <Route path="/campaigns" component={CampaignsRoutes} />
            <Route path="/templates" component={TemplatesRoutes} />
            <Route path="/lists" component={ListsRoutes} />
            <Route path="/analytics" component={AnalyticsRoutes} />
            <Route path="/accountsManagement" component={AccountsManagementRoutes} />
            <Route path="/permissions" component={PermissionsRoutes} />
            <Route path="/settings" component={Settings} />
            <Route path="*" component={NotFound} />
          </Switch>
        </App>



        {/* <Route path="/" render={(props) => { 
            console.log("props", props);
           return (<App cookies={this.props.cookies} {...props} />)} }
           component={App}
           >
             <Route component={TestComponent} />
          </Route> */}


        {/* <Switch>
          <Route render={(props) => <App {...props} cookies={this.props.cookies} />} />
        </Switch> */}
        {/* <Switch>
        <Route render={(props) => <App {...props} cookies={this.props.cookies} />} />
          <Route path="/" exact component={Dashboard} onEnter={this.onEnter} />
        </Switch> */}



        {/* <Switch>

        
          <Route path="/" render={(props) => { 
            console.log("props", props);
           return (<App cookies={this.props.cookies} {...props} />)} }
           >
             {/* <App /> 
             <App cookies={this.props.cookies} />
            <Route path="/" component={Dashboard} onEnter={this.onEnter} />

             
             </Route> 
          {/*
            <Router history={history}>
             <Route exact path="/" component={App}>
            <Route exact component={Dashboard} onEnter={this.onEnter} />
            
            <Route path="campaigns" onEnter={this.onEnter} >
              <Route path="create" component={CreateCampaign} />
              <Route path="manage" component={ManageCampaigns} />
              <Route path="manage/:slug" component={CampaignView} />
            </Route>

            <Route path="templates" onEnter={this.onEnter} >
              <Route path="create" component={CreateTemplate} />
              <Route path="manage" component={ManageTemplates} />
              <Route path="manage/:slug" component={TemplateView} />
            </Route>

            <Route path="lists" onEnter={this.onEnter} >
              <Route path="create" component={CreateList} />
              <Route path="manage" component={ManageLists} />
              <Route path="manage/:listId" component={ManageListSubscribers} />
            </Route>

            <Route path="analytics" onEnter={this.onEnter} >
              <Route path="reports" component={CampaignReports} />
            </Route>

            <Route path="accountsManagement" onEnter={this.onEnter} >
              <Route path="createAccount" component={CreateAccount} />
              <Route path="deleteAccount" component={DeleteAccount} />
            </Route>

            <Route path="permissions" onEnter={this.onEnter} >
              <Route path="grant" component={GrantPermissions} />
              <Route path="offered" component={OfferedPermissions} />
              <Route path="received" component={ReceivedPermissions} />
            </Route>

            <Route path="settings" component={Settings} onEnter={this.onEnter} />

            <Route path="*" component={NotFound} />
          </Route> 
        </Switch>
        </Router>*/}
      </>
    );
  }
}

const ConnectedRouterConfig = connect(mapStateToProps, null)(RouterConfig);




export default function (props) {
  const { history } = props;

  return (
    <Router history={history}>
      <Route path="/" component={ConnectedRouterConfig} />
    </Router>
  )

}