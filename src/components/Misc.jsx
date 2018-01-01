import Fetch from 'whatwg-fetch';
import React from 'react';
import { Button } from 'antd-mobile';
import { MISC_URL } from '../constants/Constant';
import FetchRequest from './common/FetchRequest';
import '../styles/misc.less';

class Misc extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  getData() {
    // fetch(MISC_URL)
    //   .then((response) => {
    //     return response.text();
    //   }).then((body) => {
    //     this.setState({
    //       users: body
    //     });
    //   });
    FetchRequest.request(MISC_URL,
      (responseData) => {
        this.setState({
          users: responseData
        });
      }
    );
  }

  render() {
    return (
      <div id="misc">
        <Button type="primary" onClick={ () => this.getData() }>Click me</Button>
        <div className="user-detail">{ this.state.users }</div>
      </div>
    );
  }
}

Misc.propTypes = {
  name: React.PropTypes.String
};

Misc.defaultProps = {
  name: 'Akkala'
};

export default Misc;