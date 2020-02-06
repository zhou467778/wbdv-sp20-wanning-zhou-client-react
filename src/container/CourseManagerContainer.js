import React from "react";
import CourseTableComponent from "../component/CourseTableComponent";
import "../css/CourseManagerStyle.css";
import CourseGridComponent from "../component/CourseGridComponent"
import CourseEditorComponent from "../component/CourseEditorComponent"
import {createCourse, findAllCourses, findUserById, updateCourse, deleteCourse} from "../services/CourseService";


class CourseManagerContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            layout: 'table',
            showEditor: false,
            selected: false,
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
                {!this.state.showEditor && <div>
                    <div className="wbdv-label wbdv-course-manager">
                        <link rel="stylesheet"
                              href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
                              integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
                              crossOrigin="anonymous"/>
                        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                              rel="stylesheet"/>
                        <link rel="stylesheet"
                              href="../css/CourseManagerStyle.css"/>
                        <link rel="stylesheet"
                              href="../css/CourseEditorStyle.css"/>


                        <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
                            <ul className="nav navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <i className="fa fa-bars wbdv-field wbdv-hamburger"></i></a>
                                </li>
                                <span
                                    className="navbar-brand wbdv-course-title d-sm-none d-md-block d-none d-sm-block"
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
                    </div>
                    <div>
                        {
                            this.state.layout === 'table' &&
                            <CourseTableComponent
                                showEditor={this.showEditor}
                                deleteCourse={this.deleteCourse}
                                updateCourse={this.updateCourse}
                                selectRow={this.selectRow}
                                toggle={this.toggle}
                                courses={this.state.courses}
                            />

                        }
                        {
                            this.state.layout === 'grid' &&
                            <CourseGridComponent
                                showEditor={this.showEditor}
                                deleteCourse={this.deleteCourse}
                                updateCourse={this.updateCourse}
                                toggle={this.toggle}
                                courses={this.state.courses}
                            />
                        }
                    </div>
                </div>
                }

                {this.state.showEditor &&
                <CourseEditorComponent
                    hideEditor={this.hideEditor}/>}

            </div>


        )
    }
}


export default CourseManagerContainer;