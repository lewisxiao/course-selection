import React from 'react';
import { Button } from 'antd-mobile';
import { Link } from 'react-router';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  render() {
    return (
      <div id="home">
        <Button>
          <Link to="misc">获取数据</Link>
        </Button>
        <Button>
          <Link to="param">获取参数</Link>
        </Button>
        <Button>
          <Link to="menu">菜单</Link>
        </Button>
        <Button>
          <Link to="teacherList">教师列表</Link>
        </Button>
      </div>
    );
  }
}

Home.propTypes = {
  name: React.PropTypes.String
};

Home.defaultProps = {
  name: 'Akkala'
};

export default Home;