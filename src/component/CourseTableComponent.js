import React from "react";
import CourseRowComponent from "./CourseRowComponent";

const CourseTableComponent = ({courses, deleteCourse, showEditor, updateCourse, toggle, selectRow}) =>
    <table className="wbdv-coursetable">
        <thead>
        <tr className="wbdv-header wbdv-tableheader " style={{height: "50px"}}>
            <th className="wbdv-header wbdv-title ">Title</th>
            <th className="wbdv-header wbdv-owner wbdv-sort">Owned by<i className="fa fa-sort-desc"></i></th>
            <th className="wbdv-header wbdv-last-modified ">Last modified by me</th>
            <th>
                <button className="wbdv-button wbdv-grid-layout" onClick={toggle}><i className="fa fa-th"
                                                                                     style={{color: "#808080"}}></i>
                </button>
                <button className="wbdv-button wbdv-sort"><i className="fas fa-sort-alpha-down"></i></button>
            </th>
        </tr>
        </thead>

        {
            courses.map(function (course) {
                return (
                    <CourseRowComponent
                        key={course._id}
                        course={course}
                        selectRow={selectRow}
                        showEditor={showEditor}
                        updateCourse={updateCourse}
                        deleteCourse={deleteCourse}

                    />
                )
            })
        }

    </table>


export default CourseTableComponent;