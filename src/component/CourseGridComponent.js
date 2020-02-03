import React from "react";
import CourseCardComponent from "../component/CourseCardComponent";




const CourseGridComponent = ({courses, deleteCourse, showEditor, updateCourse,toggle}) =>
     <div className="wbdv-cardcontainer">
         <div className = "wbdv-cardheader">
             <span><h5 className="wbdv-card wbdv-document">Recent documents</h5></span>
             <span><h6 className="wbdv-card wbdv-owner">Owned by me</h6></span>
         <span><button className="wbdv-list-layout" onClick={toggle}><i className="fas fa-list"></i></button></span>
             <span><button className = "wbdv-card wbdv-sort"><i className="fas fa-sort-alpha-down"></i></button></span>

         </div>

<br></br>
         <div className="row">

         {
             courses.map(function (course, index) {
                 return (
                     <CourseCardComponent
                         course={course}
                         showEditor={showEditor}
                         updateCourse={updateCourse}
                         deleteCourse={deleteCourse}/>
                 )
             })
         }



</div>
     </div>



export default CourseGridComponent