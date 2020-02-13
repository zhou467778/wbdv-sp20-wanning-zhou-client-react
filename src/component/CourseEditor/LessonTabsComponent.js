import React from "react";
import "../../css/CourseEditorStyle.css"
import "../../../node_modules/font-awesome/css/font-awesome.css"
import "bootstrap/dist/css/bootstrap.css"
import {connect} from "react-redux";
import {
    createLesson_dis,
    findLessonForModule_dis,
    deleteLesson_dis,
    updateLesson_dis
} from "../../actions/LessonAction";
import LessonService from "../../services/LessonService";
import {Link} from "react-router-dom";
import LessonItemComponent from "./LessonItemComponent";


class LessonTabsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editingLesson: '',
            selectingLessonId: this.props.lessonId,
            notSelected: this.props.moduleId === 'undefined' || this.props.moduleId === ''
        }
    }

    componentDidMount() {
        this.props.findLessonForModule(this.props.moduleId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.moduleId !== prevProps.moduleId) {
            this.props.findLessonForModule(this.props.moduleId)
        }
    }

    render() {
        return (
            <div className=" wbdv-lesson-tab">
                <ul className="nav nav-tabs nav-justified">
                    {this.props.lessons && this.props.lessons.map(lesson =>
                        <Link
                            to={`/course-editor/${this.props.courseTitle}/${this.props.courseId}/module/${this.props.moduleId}/lesson/${lesson._id}`}>

                            <LessonItemComponent
                                key={lesson._id}
                                lesson={lesson}

                                edit={() => {
                                    this.props.history.push(`/course-editor/${this.props.courseTitle}/${this.props.courseId}/module/${this.props.moduleId}`)
                                    this.setState({
                                        editingLesson: lesson._id
                                    })
                                }}
                                select={() => {
                                    this.props.history.push(`/course-editor/${this.props.courseTitle}/${this.props.courseId}/module/${this.props.moduleId}`)
                                    this.setState({
                                        selectingLessonId: lesson._id
                                    })
                                }}
                                save={() => this.setState({
                                    editingLesson: ''
                                })}
                                editing={this.state.editingLesson === lesson._id}
                                selecting={this.state.selectingLessonId === lesson._id}
                                deleteLesson={this.props.deleteLesson}
                                updateLesson={this.props.updateLesson}/>

                        </Link>
                    )}


                    {/*User needs to click on the module first, and then add the lessons into the module,*/}
                    {/*or the plus-button will not work*/}
                    < button type="button" className="btn btn-outline-primary"
                             onClick={() => {
                                 this.props.moduleId && this.props.createLesson(this.props.moduleId)
                                 !this.props.moduleId && alert("Please select one module first")
                             }}>
                        <i className="fa fa-plus"></i></button>


                </ul>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => {
    return {
        lessons: state.lessons.lessons
    }
}

const dispatchToPropertyMapper = (dispatch) => {
    return {
        findLessonForModule: (moduleId) => {
            LessonService.findLessonForModule(moduleId)
                .then(actualLessons => dispatch(
                    findLessonForModule_dis(actualLessons)
                ))
        },

        createLesson: (moduleId) => {
            LessonService.createLesson(moduleId)
                .then(actualLesson =>
                    dispatch(createLesson_dis(actualLesson)))
        },

        deleteLesson: (lessonId) =>
            LessonService.deleteLesson(lessonId)
                .then(status =>
                    dispatch(deleteLesson_dis(lessonId))),

        updateLesson: (lesson) =>
            LessonService.updateLesson(lesson)
                .then(newLesson =>
                    dispatch(updateLesson_dis(newLesson))
                )
    }
}

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(LessonTabsComponent);

