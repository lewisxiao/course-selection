import React from 'react';
import { Button } from 'antd-mobile';
import { Link } from 'react-router';
import Home from './Home';

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Button>
          <Link to="/">首页</Link>
        </Button>
        { this.props.children || <Home/> }
      </div>
    );
  }
}
