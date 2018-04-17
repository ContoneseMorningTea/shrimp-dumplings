import '../node_modules/bulma/css/bulma.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<BrowserRouter>
  <Switch>
    <Route path="/" component={App} />
  </Switch>
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
