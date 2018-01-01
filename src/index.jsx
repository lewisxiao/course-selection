import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Misc from './components/Misc';
import Param from './components/Param';
import Home from './components/Home';
import MainMenu from './components/MainMenu';
import { Router, browserHistory, Route, IndexRoute} from 'react-router';

import './index.less';

ReactDOM.render(
  <Router
    history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="misc" component={Misc}/>
      <Route path="param" component={Param}/>
      <Route path="menu" component={MainMenu}/>
    </Route>
  </Router>,
  document.getElementById('app'))