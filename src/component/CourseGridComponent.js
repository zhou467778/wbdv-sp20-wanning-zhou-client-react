import React from "react";
import CourseCardComponent from "./CourseCardComponent";

const CourseGridComponent = ({courses, deleteCourse, showEditor, updateCourse, toggle}) =>
    <div className="wbdv-cardcontainer ">
        <table className="wbdv-coursetable ">
            <thead>
            <tr className="wbdv-header wbdv-tableheader " style={{height: "50px"}}>
                <th className="wbdv-header wbdv-title ">Recent documents</th>
                <th className="wbdv-header wbdv-owner wbdv-sort">Owned by me<i className="fa fa-sort-desc"></i></th>
                <th>
                    <button className="wbdv-button wbdv-grid-layout" onClick={toggle}><i className="fa fa-th"
                                                                                         style={{color: "#808080"}}></i>
                    </button>
                    <button className="wbdv-button wbdv-sort"><i className="fas fa-sort-alpha-down"></i></button>
                </th>
            </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
        <br></br>

        <div className="row ">
            {
                courses.map(function (course, index) {
                    return (
                        <CourseCardComponent
                            key={course._id}
                            course={course}
                            showEditor={showEditor}
                            updateCourse={updateCourse}
                            deleteCourse={deleteCourse}
                        />
                    )
                })
            }

        </div>
    </div>


export default CourseGridComponent