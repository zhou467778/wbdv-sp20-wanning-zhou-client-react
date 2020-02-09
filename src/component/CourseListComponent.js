import CourseTableComponent from "./CourseTableComponent";
import CourseGridComponent from "./CourseGridComponent";
import "../css/CourseManagerStyle.css";
import React from "react";

const CourseListComponent = (
    {
        updateForm,
        newCourseTitle,
        addCourse,
        layout,
        showEditor,
        deleteCourse,
        updateCourse,
        selectRow,
        toggle,
        courses
    }
) =>

<div>
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

                       onChange={(e) => updateForm({
                           newCourseTitle: e.target.value
                       })}
                       value={newCourseTitle}/>


                <a type="button" className="wbdv-button wbdv-add-course"
                   onClick={addCourse}><i className="fa fa-plus"></i></a>

            </div>
        </nav>
    </div>
    <div>
        {
            layout === 'table' &&
            <CourseTableComponent
                showEditor={showEditor}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse}
                selectRow={selectRow}
                toggle={toggle}
                courses={courses}
            />

        }
        {
            layout === 'grid' &&
            <CourseGridComponent
                showEditor={showEditor}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse}
                toggle={toggle}
                courses={courses}
            />
        }
    </div>
</div>

export default CourseListComponent;