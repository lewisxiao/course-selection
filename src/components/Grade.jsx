import React from 'react';

class Grade extends React.Component {

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
        <div className="grace-detail">Grade page</div>
      </div>
    );
  }
}

Grade.propTypes = {
};

Grade.defaultProps = {
};

export default Grade;