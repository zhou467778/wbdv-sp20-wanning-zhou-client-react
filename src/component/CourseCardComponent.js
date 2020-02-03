import React from "react";

class CourseCardComponent extends React.Component {
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

            <div className="col-lg-2 col-sm-12 col-md-4 card">
            <div className="card wbdv-one-card" style={{width: '16rem'}}>
                < img className="card-img-top"
                      src="https://picsum.photos/300/200"/>
                    <div className="card-body">
                        <a  href="#" type="button" className="wbdv-card wbdv-title card-title" onClick={()=> this.props.showEditor}>
                            <i className="fas fa-file-alt wbdv-card wbdv-icon" style={{color:"#1E90FF"}}></i> {this.state.courseTitle}</a>
                        <p className="card-text">Modified by me    6:45PM</p>

                        {!this.state.editing &&
                        <button onClick={() =>
                        this.setState(
                            {editing: true}

                        ) } ><i className="fas fa-edit"  style={{color:"#808080"}}></i></button>}

                        {!this.state.editing &&
                        <button onClick={() => this.props.deleteCourse(this.props.course)}
                                className="wbdv-card wbdv-button wbdv-delete">
                            <i className="fas fa-trash-alt" style={{color:"#808080"}}></i></button>}

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

                        {this.state.editing
                        && <input value={this.state.courseTitle}
                                  onChange={(e) => this.setState({
                                      courseTitle: e.target.value
                                  })}/>}

                    </div>
            </div>
</div>


        )
    }
}



export default CourseCardComponent;