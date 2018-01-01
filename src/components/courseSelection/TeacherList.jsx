import React from 'react';
import { List } from 'antd-mobile';

const Item = List.Item;

class TeacherList extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    const { teachers } = this.props;
    const teacherNameEle = teachers.map(teacherName =>
      <Item arrow='horizontal' onClick={() => {}}>{ teacherName }</Item>
    );

    return (
      <div id="teacher">
        <List renderHeader={() => '教师列表'} className="teacher-list">
          { teacherNameEle }
        </List>
      </div>
    );
  }
}

TeacherList.propTypes = {
  teachers: React.PropTypes.array
};

TeacherList.defaultProps = {
  teachers: ['张三丰', '杨过', '李一封']
};

export default TeacherList;