import React from "react";

class LessonItemComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lessonTitle: this.props.lesson.title

        }
    }

    render() {
        let style = this.props.selecting || this.props.editing ? "lesson-selected" : "lesson-unselected";
        return (
            <div>
                <li className="nav-item" >

                    <a type = "text" className={`nav-link ${style}`} onClick={this.props.select}>

                        {!this.props.editing &&
                            <span>
                                <b> {this.state.lessonTitle}</b>
                                <button className="wbdv-lesson-tab-edit"
                                        onClick={this.props.edit}><i className="fa fa-edit"></i></button>
                            </span>
                        }

                        {this.props.editing &&
                        <span>
                            <input value = {this.state.lessonTitle}
                                   onChange={(e) => this.setState({
                                       lessonTitle: e.target.value
                                   }) }
                            />
                            <button className = "wbdv-lesson-tab-delete"
                                    onClick={() => this.props.deleteLesson(this.props.lesson._id)}>X</button>
                            <button className ="wbdv-lesson-tab-check"
                                    onClick= {() => {
                                        const newLesson = this.props.lesson;
                                        newLesson.title = this.state.moduleTitle;
                                        this.props.updateLesson(newLesson);
                                        this.props.save()
                                    }}><i className="fa fa-check"></i>
                                    </button>

                        </span>}

                    </a>
                </li>

            </div>
        );
    }
}

export default LessonItemComponent