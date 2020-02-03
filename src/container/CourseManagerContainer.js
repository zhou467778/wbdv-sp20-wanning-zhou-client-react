import React from "react";
import CourseTableComponent from "../component/CourseTableComponent";
import "../css/CourseManagerStyle.css";
import CourseGridComponent from "../component/CourseGridComponent"
import {createCourse, findAllCourses, findUserById, updateCourse, deleteCourse} from "../services/CourseService";


class CourseManagerContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            layout: 'table',
            showEditor: false,
            newCourseTitle: '',
            courses: [],
            id: ''

        }
    }


     initCourses = async () => {
        const courses = await findAllCourses()
        this.setState({
            courses: courses
        })
    };

    componentDidMount = this.initCourses();


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

    deleteCourse = (course) =>
        deleteCourse(course._id)
            .then(
                () => this.initCourses()
            )



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


    updateCourse = (course) => {
        updateCourse(course).then(
            () => this.initCourses()
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

    updateForm = (newState) => {
        this.setState(newState)
    }


    render() {
        return (

            <div className="wbdv-label wbdv-course-manager">
                <link rel="stylesheet"
                      href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
                      integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
                      crossOrigin="anonymous"/>
                <link rel="stylesheet"
                      href="../css/CourseManagerStyle.css"/>
                <meta charSet="utf-8" name="viewport"
                      content="width=device-width, initial-scale=1.0"/>


                    <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
                        <ul className="nav navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="fa fa-bars wbdv-field wbdv-hamburger"></i></a>
                            </li>
                            <span className="navbar-brand wbdv-course-title d-sm-none d-md-block d-none d-sm-block"
                                  href="#">Course Manager</span>
                        </ul>
                        <div className="form-inline wbdv-field wbdv-new-course">
                            <label htmlFor="newcourse"></label>
                            <input id="newcourse" className="form-control "
                                   type="text" placeholder="New Course Title"

                                   onChange={(e) => this.updateForm({
                                       newCourseTitle: e.target.value
                                   })}
                                   value={this.state.newCourseTitle}/>

                            <a type="button" className="wbdv-button wbdv-add-course"
                               onClick={this.addCourse}><i className="fa fa-plus"></i></a>

                        </div>
                    </nav>
                    {
                    this.state.layout === 'table' &&
                        <CourseTableComponent
                            showEditor={this.showEditor}
                            deleteCourse={this.deleteCourse}
                            updateCourse={this.updateCourse}
                            toggle = {this.toggle}
                            courses={this.state.courses}/>

                    }
                {
                    this.state.layout === 'grid' &&
                        <CourseGridComponent
                            showEditor={this.showEditor}
                            deleteCourse={this.deleteCourse}
                            updateCourse={this.updateCourse}
                            toggle = {this.toggle}
                            courses={this.state.courses}/>
                }


            </div>
    )
    }
    }


    export default CourseManagerContainer;