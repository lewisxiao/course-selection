import React from 'react';

class Package extends React.Component {

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
        <div className="grace-detail">Package page</div>
      </div>
    );
  }
}

Package.propTypes = {
};

Package.defaultProps = {
};

export default Package;