import React from 'react';

class Param extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let data = this.props.location.query;
    console.log(data);
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