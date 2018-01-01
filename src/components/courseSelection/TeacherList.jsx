import React from 'react';

class TeacherList extends React.Component {

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
        <div className="grace-detail">TeacherList page</div>
      </div>
    );
  }
}

TeacherList.propTypes = {
};

TeacherList.defaultProps = {
};

export default TeacherList;