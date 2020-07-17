import React, { PropTypes } from 'react';

import DisabledLink from '../common/DisabledLink';
import SidebarLink from '../common/SidebarLink';
import SidebarTreeview from '../common/SidebarTreeview';

const Sidebar = (props) => { // eslint-disable-line no-unused-vars
  const { user, activeAccount } = props;
  const anotherAccountIsActive = activeAccount.hasOwnProperty('email'); // If this prop exists, the account is currently active
  /*
  Rules for rendering sidebar if another user account is active (permission active)

  - Do not render Dashboard
  - Render campaigns if activeAccount.campaigns !== undefined
  - Render templates if activeAccount.templates !== undefined
  - Render lists if activeAccount.lists !== undefined
  - Do not render analytics (unsure if this treeview will remain in mvp)
  - Do not render permissions (users can only manipulate this themselves)
  - Do not render settings (users can only modify their own settings)
  */

  return (
    <aside className="main-sidebar sidebar-dark-primary">
      <a href="#" className=".brand-link">
        <span className="logo-mini">
          <strong>MfG</strong>
        </span>
        <span className="logo-lg">
          <strong>Mail for Good <i className="fa fa-free-code-camp" /></strong>
        </span>
      </a>
      <div className="sidebar">

        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img src={user.picture || 'https://placeholdit.imgix.net/~text?txtsize=15&txt=160%C3%97160&w=160&h=160'} className="img-circle elevation-2" alt="User Image" />
              </div>
            <div className="info">
              {/* <a href="#" className="d-block">Alexander Pierce</a> */}
              <p>{user.name || 'Loading...'}</p>
              <a><i className="fa fa-circle text-success" />Online</a>
            </div>
          </div>
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu">
            <li className="nav-header">OPTIONS</li>
          
            {!anotherAccountIsActive
              ? <SidebarLink to="/" icon="fa-tachometer-alt">Dashboard</SidebarLink>
              : <DisabledLink icon="fa-tachometer-alt">Dashboard</DisabledLink>}

            {(!anotherAccountIsActive || (activeAccount.lists && activeAccount.lists !== 'none'))
              ? <SidebarTreeview name="Lists" icon="fa-list">
                <SidebarLink to="/lists/create">Create List</SidebarLink> {/* Import from CSV etc. Keep this isolated to importing */}
                <SidebarLink to="/lists/manage">Manage Lists</SidebarLink> {/* RUD, Export list, statistics, add subscriber, duplicate list, combine list */}
              </SidebarTreeview>
              : <DisabledLink icon="fa-list">Lists1</DisabledLink>}

            {(!anotherAccountIsActive || (activeAccount.templates && activeAccount.templates !== 'none'))
              ? <SidebarTreeview name="Templates" icon="fa-file">
                <SidebarLink to="/templates/create">Create Template</SidebarLink> {/* typeofcampaign (html, plain etc), use template, steps= 1. to who - 2. campaign info (name, from, subject, from email, options for tracking) 3. Template 4. Write the actual email 5. send & confirm*/}
                <SidebarLink to="/templates/manage">Manage Templates</SidebarLink> {/* delete, resend, edit, view report (analytics) */}
              </SidebarTreeview>
              : <DisabledLink icon="fa-file">Templates</DisabledLink>}

            {(!anotherAccountIsActive || (activeAccount.campaigns && activeAccount.campaigns !== 'none'))
              ? <SidebarTreeview name="Campaigns" icon="fa-envelope">
                <SidebarLink to="/campaigns/create">Create Campaign</SidebarLink> {/* typeofcampaign (html, plain etc), use template, steps= 1. to who - 2. campaign info (name, from, subject, from email, options for tracking) 3. Template 4. Write the actual email 5. send & confirm*/}
                <SidebarLink to="/campaigns/manage">Manage Campaigns</SidebarLink> {/* delete, resend, edit, view report (analytics) */}
              </SidebarTreeview>
              : <DisabledLink icon="fa-envelope">Campaigns</DisabledLink>}

            {!anotherAccountIsActive
              ? <SidebarTreeview name="Accounts management" icon="fa-users">
                <SidebarLink to="/accountsManagement/createAccount">Create new account</SidebarLink>
                <SidebarLink to="/accountsManagement/deleteAccount">Delete account</SidebarLink>
              </SidebarTreeview>
              : <DisabledLink icon="fa-users">Accounts management</DisabledLink>}

            {!anotherAccountIsActive
              ? <SidebarLink to="/settings" icon="fa-cog">Settings</SidebarLink>
              : <DisabledLink icon="fa-cog">Settings</DisabledLink>} {/* User's settings e.g. AWS keys */}

          </ul>
          </nav>
        </div>
    </aside>
  );
};

Sidebar.propTypes = {
        user: PropTypes.object,
  activeAccount: PropTypes.object.isRequired
};

export default Sidebar;
