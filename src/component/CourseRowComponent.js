import React from "react";

class CourseRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            selected: false,
            courseTitle: this.props.course.title,
        }
    }

    render() {
        return (
            <tbody>

            <tr className="wbdv-row wbdv-course">

                {this.state.editing
                && <input value={this.state.courseTitle}
                          onChange={(e) => this.setState({
                              courseTitle: e.target.value
                          })}/>}


                {!this.state.editing && <td className="wbdv-title-icons">
                    <a href="#" type="button" className="wbdv-row wbdv-title" onClick={() => this.props.showEditor}>
                        <i className="fas fa-file-alt wbdv-row wbdv-icon"
                           style={{color: "#1E90FF"}}></i> {this.state.courseTitle}</a>
                </td>
                }


                <td className="wbdv-row wbdv-owner">me</td>


                <td className="wbdv-row wbdv-modified-date">6:45 PM</td>

                {this.state.editing

                && <td>
                    <button className="wbdv-check" onClick={() => {
                        const newCourse = this.props.course;
                        newCourse.title = this.state.courseTitle;
                        this.props.updateCourse(newCourse);
                        this.setState(
                            {editing: false}
                        )
                    }}
                    >
                        <i className="fas fa-check"></i></button>
                </td>}

                {!this.state.editing &&
                <td>
                    <button onClick={() =>
                        this.setState(
                            {editing: true}
                        )}><i className="fas fa-edit" style={{color: "#808080"}}></i></button>

                    <button onClick={() => this.props.deleteCourse(this.props.course)}
                            className="wbdv-row wbdv-button wbdv-delete">
                        <i className="fas fa-trash-alt" style={{color: "#808080"}}></i></button>
                </td>}


            </tr>
            </tbody>


        )


    }
}

export default CourseRow;