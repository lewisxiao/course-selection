import React from 'react';

class TeacherSchedule extends React.Component {

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
        <div className="grace-detail">TeacherSchedule page</div>
      </div>
    );
  }
}

TeacherSchedule.propTypes = {
};

TeacherSchedule.defaultProps = {
};

export default TeacherSchedule;