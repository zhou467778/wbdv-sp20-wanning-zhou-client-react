import React from "react";
import {Link} from "react-router-dom";

class CourseCardComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            selected: false,
            courseTitle: this.props.course.title
        }
    }

    render() {
        return (

            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 ">
                <div className="card wbdv-one-card" style={{width: '14rem'}}>
                    < img className="card-img-top"
                          src="https://picsum.photos/300/200"/>
                    <div className="card-body">

                        <Link to={`/course-editor/${this.props.course.title}/${this.props.course._id}`}>
                            <i className="fas fa-file-alt wbdv-card wbdv-icon"
                               style={{color: "#1E90FF"}}></i> {this.props.course.title}</Link>
                        <p className="card-text">Modified by me 6:45PM</p>

                        {this.state.editing
                        && <input value={this.state.courseTitle}
                                  onChange={(e) => this.setState({
                                      courseTitle: e.target.value
                                  })}/>}

                        {!this.state.editing &&
                        <button onClick={() =>
                            this.setState(
                                {editing: true}
                            )}><i className="fas fa-edit" style={{color: "#808080"}}></i></button>}

                        {!this.state.editing &&
                        <button onClick={() => {
                            this.props.deleteCourse(this.props.course);

                        }}
                                className="wbdv-card wbdv-button wbdv-delete">
                            <i className="fas fa-trash-alt" style={{color: "#808080"}}></i></button>}

                        {this.state.editing &&
                        <button className="wbdv-check" onClick={() => {
                            const newCourse = this.props.course;
                            newCourse.title = this.state.courseTitle;
                            this.props.updateCourse(newCourse);
                            this.setState(
                                {editing: false}
                            )
                        }}
                        >
                            <i className="fas fa-check"></i></button>}


                    </div>
                </div>
            </div>


        )
    }
}


export default CourseCardComponent;