/* eslint-disable import/default */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { CookiesProvider } from 'react-cookie';

import RouterConfig from './RouterConfig';
import configureStore from './store/configureStore';
require('./favicon.ico'); // Tell webpack to load favicon.ico
import { syncHistoryWithStore } from 'react-router-redux';

// CSS imports
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './utils/adminLte/app.js'; // JS needs to be modified for compatabiltiy with react router
// import '../node_modules/admin-lte/dist/css/adminlte.min.css';
// import 'admin-lte/dist/css/AdminLTE.min.css';
import 'admin-lte/dist/css/adminlte.min.css';
// import './adminlte.min.css';

import './utils/adminLte/mail-for-good-theme.css'; // Theme for Mail for Good

import 'react-widgets/dist/css/react-widgets.css';
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';

import './styles/index.scss';

const store = configureStore();

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(createBrowserHistory(), store);
//<RouterConfig history={history} store={store} Router={Router} />
render(
  <CookiesProvider>
    <Provider store={store}>
      <RouterConfig history={history} />
    </Provider>
    </CookiesProvider>, document.getElementById('app')
  
);
