import React from "react";
import "../../css/CourseEditorStyle.css"
import "../../../node_modules/font-awesome/css/font-awesome.css"
import "bootstrap/dist/css/bootstrap.css"
import {createTopic_dis, findTopicForLesson_dis, deleteTopic_dis, updateTopic_dis} from "../../actions/TopicAction";
import TopicService from "../../services/TopicService";
import {connect} from "react-redux";
import TopicItemComponent from "./TopicItemComponent";
import {Link} from "react-router-dom";


class TopicPillsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editingTopic: '',
            selectingTopicId: this.props.topicId
        }
    }

    componentDidMount() {
        this.props.findTopicForLesson(this.props.lessonId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.lessonId !== prevProps.lessonId) {
            this.props.findTopicForLesson(this.props.lessonId)
        }
    }

    render() {
        return (
            <div className=" wbdv-topic-pill-list">
                <ul className="nav nav-tabs nav-justified">
                    {this.props.topics && this.props.topics.map(topic =>
                        <Link
                            to={`/course-editor/${this.props.courseTitle}/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}/topic/${topic.id}`}>

                            <TopicItemComponent
                                key={topic.id}
                                topic={topic}

                                edit={() => {
                                    this.props.history.push(`/course-editor/${this.props.courseTitle}/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}`)
                                    this.setState({
                                        editingTopic: topic.id
                                    })
                                }}
                                select={() => {
                                    this.props.history.push(`/course-editor/${this.props.courseTitle}/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}`)
                                    this.setState({
                                        selectingTopicId: topic.id
                                    })
                                }}
                                save={() => this.setState({
                                    editingTopic: ''
                                })}
                                editing={this.state.editingTopic === topic.id}
                                selecting={this.state.selectingTopicId === topic.id}
                                deleteTopic={this.props.deleteTopic}
                                updateTopic={this.props.updateTopic}/>

                        </Link>
                    )}

                    {/*User needs to select one lesson first, and then can add topics into the lesson.*/}
                    {/*Or the plus-button will not work*/}
                    <button type="button" className="btn btn-primary wbdv-topic-add-btn"
                            onClick={() => {
                                this.props.lessonId && this.props.createTopic(this.props.lessonId)
                                !this.props.lessonId && alert("Please select one lesson first")
                            }}>
                        <i className="fa fa-plus"></i>
                    </button>
                </ul>
            </div>
        )
    }
}


const stateToPropertyMapper = (state) => {
    return {
        topics: state.topics.topics
    }
}

const dispatchToPropertyMapper = (dispatch) => {
    return {
        findTopicForLesson: (lessonId) => {
            TopicService.findTopicForLesson(lessonId)
                .then(actualTopics => dispatch(
                    findTopicForLesson_dis(actualTopics)
                ))
        },

        createTopic: (lessonId) => {
            TopicService.createTopic(lessonId)
                .then(actualTopic =>
                    dispatch(createTopic_dis(actualTopic)))
        },

        deleteTopic: (topicId) =>
            TopicService.deleteTopic(topicId)
                .then(status =>
                    dispatch(deleteTopic_dis(topicId))),

        updateTopic: (topic) =>
            TopicService.updateTopic(topic)
                .then(newTopic =>
                    dispatch(updateTopic_dis(newTopic))
                )
    }
}


export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(TopicPillsComponent);