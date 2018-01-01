import React from 'react';
import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';

class Param extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let data = this.props.location.query;
    console.log(data);
    Toast.loading('Loading...', 1, () => {
      console.log('Load complete !!!');
    });
  }

  render() {
    return (
      <div id="param">
        <div className="param-detail">{ this.props.params.name }</div>
      </div>
    );
  }
}

Param.propTypes = {
};

Param.defaultProps = {
};

export default Param;