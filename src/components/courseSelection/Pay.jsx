import React from 'react';

class Pay extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let data = this.props.location.query;
    console.log(data);
  }

  render() {
    return (
      <div id="grace">
        <div className="grace-detail">Pay page</div>
      </div>
    );
  }
}

Pay.propTypes = {
};

Pay.defaultProps = {
};

export default Pay;