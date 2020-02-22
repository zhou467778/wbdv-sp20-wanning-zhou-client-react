import React from "react";

import "../css/CourseManagerStyle.css";
import CourseEditorComponent from "../component/CourseEditor/CourseEditorComponent"
import {createCourse, findAllCourses, findUserById, updateCourse, deleteCourse} from "../services/CourseService";
import CourseListComponent from "../component/CourseListComponent";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";


class CourseManagerContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            layout: 'table',
            showEditor: false,
            selected: false,
            newCourseTitle: '',
            courses: [],
            id: '',
            currentTopicId: null,
        }
    }


    initCourses = async () => {
        const courses = await findAllCourses()
        this.setState({
            courses: courses
        })
    };

    componentDidMount = this.initCourses();

    // to toggle the state layout between table and grid
    toggle = () =>
        this.setState(prevState => {
            if (prevState.layout === 'table') {
                return ({
                    layout: 'grid'
                })
            } else {
                return ({
                    layout: 'table'
                })
            }
        })

    // delete a course when users click on the delete button
    deleteCourse = (course) => {
        deleteCourse(course._id).then(() => {
            this.setState(prevState => {
                const newState = {
                    courses: prevState.courses
                        .filter(function (crs) {
                            return crs._id != course._id
                        })
                }
                return newState
            })
        });
    }


    // add a course when users click on add button, the new course will show up on the bottom row
    addCourse = () =>
        createCourse({
            title: this.state.newCourseTitle,

        }).then(actualCourse => {
                this.setState(prevState => {
                    return ({
                        courses: [
                            ...prevState.courses,
                            actualCourse
                        ],
                        newCourseTitle: ''
                    })
                })

            }
        )

    // update the course when users click on the check button
    updateCourse = (course) => {
        updateCourse(course).then(
            () => {
                this.setState(prevState => {
                    const newCourses = {
                        courses: prevState.courses.map(c => {
                            if (c._id == course._id)
                                return course
                            else
                                return c
                        })
                    }
                })

            }
        )
    }


    showEditor = () =>
        this.setState({
            showEditor: true
        })

    hideEditor = () =>
        this.setState({
            showEditor: false
        })

    selectRow = () =>
        this.setState({
            selected: true
        })

    updateForm = (newState) => {
        this.setState(newState)
    }


    render() {
        return (
            <div>
                <Router>

                   <Route path = {["/","/:layout"]}
                          exact = {true}
                          render = {(props) =>
                    <CourseListComponent
                        {...props}
                        layout = {props.match.params.layout}
                        updateForm = {this.updateForm}
                    newCourseTitle ={this.state.newCourseTitle}
                    addCourse ={this.addCourse}
                    showEditor = {this.showEditor}
                    deleteCourse = {this.deleteCourse}
                    updateCourse={this.updateCourse}
                    selectRow ={this.selectRow}
                        toggle = {this.toggle}
                    courses ={this.state.courses}

                    />
                }
                       />

                    <Route path="/course-editor/:courseTitle/:courseId"
                           exact={true}
                           render={(props) =>
                               <CourseEditorComponent
                                   {...props}
                                   courseTitle = {props.match.params.courseTitle}
                                   courseId={props.match.params.courseId}/>
                           }/>
                    <Route path="/course-editor/:courseTitle/:courseId/module/:moduleId"
                           exact={true}
                           render={(props) =>
                               <CourseEditorComponent
                                   {...props}
                                   moduleId={props.match.params.moduleId}
                                   courseId={props.match.params.courseId}
                                   courseTitle = {props.match.params.courseTitle}/>
                           }/>
                    <Route path="/course-editor/:courseTitle/:courseId/module/:moduleId/lesson/:lessonId"
                           exact={true}
                           render={(props) =>
                               <CourseEditorComponent
                                   {...props}
                                   lessonId={props.match.params.lessonId}
                                   moduleId={props.match.params.moduleId}
                                   courseId={props.match.params.courseId}
                                   courseTitle = {props.match.params.courseTitle}/>
                           }/>
                    <Route path="/course-editor/:courseTitle/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId"
                           exact={true}
                           render={(props) =>
                               <CourseEditorComponent
                                   {...props}
                                   lessonId={props.match.params.lessonId}
                                   moduleId={props.match.params.moduleId}
                                   courseId={props.match.params.courseId}
                                   topicId = {props.match.params.topicId}
                                   courseTitle = {props.match.params.courseTitle}/>
                           }/>


                </Router>
            </div>


        )
    }
}


export default CourseManagerContainer;