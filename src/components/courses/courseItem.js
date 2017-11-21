import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const CourseItem = ({course}) => {
  return (
    <tr>
      <td><a href={course.watchHref} target="_blank">Watch</a></td>
      <td><a href={course.watchHref} target="_blank">Delete</a></td>
      <td><Link to={'/course/' + course.id}>{course.title}</Link></td>
      <td>{course.authorId}</td>
      <td>{course.category}</td>
      <td>{course.length}</td>
    </tr>
  );
};

CourseItem.propTypes = {
  course: PropTypes.object.isRequired
};

export default CourseItem;
