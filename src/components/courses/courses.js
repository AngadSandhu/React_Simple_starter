import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import * as courseActions from '../../actions/courseActions';

import CourseList from './courseList';



export class Courses extends React.Component {
    constructor(props,context){
        super(props,context);

        this.state = {  course:{  Title:"" } };

        // this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    // onTitleChange(event){
    //     const course = this.state.course;
    //     course.courseTitle = event.target.value;
    //     this.setState({course : course});   
    // }

    onClickSave(){
        // alert(`Saving ${this.state.course.Title}`);


        //Use this method only when not using mapDispatchToProps
        this.props.dispatch(courseActions.createCourse(this.state.course));    


        // This is used when mapDispatchToProps is used along with it 
        // this.props.createCourse(this.state.course);
        console.log(this.props.courses);
    }



    courseItem(course,index){
        if (course.Title!=='')
        return <li className="list-group-item" key={index}> {course.Title} </li> ;
    }


    render(){

        const {courses} = this.props;

        return (
            <div className="container-fluid">
                <h1>Welcome to Courses Page</h1>

                <div className="col-md-4">
                    <input type="text" className="form-control" onChange={event => {this.setState( {  course:{  Title:event.target.value } });}} value={this.state.course.Title} />
                </div>    
                <div className="col-md-4">
                <button className="btn btn-primary" type="submit" onClick={this.onClickSave}>Add Course</button>
                </div> 

                <div className="row">
                    <div className="col-md-4">
                        <ul className="list-group">
                            {this.props.courses.map(this.courseItem)}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state,ownProps){
    return{
        courses: state.courses
    };
}


// function mapDispatchToProps(dispatch){
//     return {
//         actions: bindActionCreators(courseActions,dispatch)
//     };
// }

export default connect(mapStateToProps)(Courses);

//  An alternate way of exporting the above module could be as follows : 
//  cosnt connectedStateAndProps =  connect(mapStateToProps, mapDispatchToProps);
//  export default connectedStateAndProps(Courses);
//