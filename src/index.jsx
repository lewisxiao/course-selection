import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Misc from './components/Misc';
import Param from './components/Param';
import Home from './components/Home';
import MainMenu from './components/MainMenu';
import TeacherList from './components/courseSelection/TeacherList';
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
      <Route path="teacherList" component={TeacherList}/>
    </Route>
  </Router>,
  document.getElementById('app'))