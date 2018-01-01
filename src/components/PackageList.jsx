import React from 'react';

class PackageList extends React.Component {

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
        <div className="grace-detail">PackageList page</div>
      </div>
    );
  }
}

PackageList.propTypes = {
};

PackageList.defaultProps = {
};

export default PackageList;