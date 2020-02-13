import React from "react";
import "bootstrap/dist/css/bootstrap.css"
import "../../css/CourseEditorStyle.css"
import "../../../node_modules/font-awesome/css/font-awesome.css"
import ModuleListComponent from "./ModuleListComponent";
import {combineReducers, createStore} from "redux";
import ModuleReducer from "../../reducer/ModuleReducer";
import {Provider} from "react-redux";
import LessonTabsComponent from "./LessonTabsComponent";
import TopicPillsComponent from "./TopicPillsComponent";
import LessonReducer from "../../reducer/LessonReducer";
import TopicReducer from "../../reducer/TopicReducer";


const rootReducer = combineReducers({
    modules: ModuleReducer,
    lessons: LessonReducer,
    topics: TopicReducer


})

const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const CourseEditorComponent = ({history, courseId, courseTitle, moduleId, lessonId, topicId}) =>
    <Provider store={store}>
        <div className=" bg-white wbdv-main">
            <div className="wbdv-button-course-title">
                <button onClick={() => history.push("/")}
                        className="wbdv-course-editor wbdv-close"><i className="fa fa-times "></i></button>
                &nbsp; &nbsp; &nbsp;
                <h2 className="wbdv-course-title">{courseTitle}</h2>
            </div>


            <ModuleListComponent
                courseId={courseId}
                moduleId={moduleId}
                courseTitle={courseTitle}
                history={history}
            />

            <LessonTabsComponent
                courseId={courseId}
                moduleId={moduleId}
                courseTitle={courseTitle}
                history={history}
                lessonId={lessonId}
            />

            <TopicPillsComponent
                courseId={courseId}
                moduleId={moduleId}
                courseTitle={courseTitle}
                history={history}
                lessonId={lessonId}
                topicId={topicId}
            />


            <br></br>

            <div className="wbdv-content">

                <button type="button" className="btn btn-success">Save</button>
                <a type="button" className="preview" style={{fontSize: "20px"}}>Preview <i className="fa fa-toggle-off"
                                                                                           style={{fontSize: "25px"}}></i></a>

                <div className="wbdv-boxed">
                    <div>
                        <h2 className="wbdv-big-heading"> Heading widget</h2>
                        <button className="wbdv-up"><i className="fa fa-arrow-up"></i></button>
                        <button className="wbdv-down"><i className="fa fa-arrow-down"></i></button>
                        <div className="form-group col-md-2 wbdv-heading">
                            <label for="heading"></label>
                            <select id="heading" className="form-control">
                                <option> Heading</option>
                            </select>
                        </div>
                        <button className="wbdv-red-close"><i className="fa fa-times"></i></button>
                    </div>

                    <div className="form-group">
                        <label for="headingtext"></label>
                        <input type="text" className="form-control" id="headingtext" placeholder="Heading Text"/>
                    </div>

                    <div className="form-group">
                        <label for="headingnumber"></label>
                        <select className="form-control" id="headingnumber">
                            <option>Heading 1</option>
                            <option>Heading 2</option>
                            <option>Heading 3</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label for="widgetname"></label>
                        <input type="text" className="form-control" id="widgetname" placeholder="Widget Name"/>
                    </div>
                    <h4>Preview</h4>
                    <h1>Heading Text</h1>

                </div>
                <button className="wbdv-red-plus"><i className="fa fa-plus"></i></button>

            </div>
        </div>
    </Provider>


export default CourseEditorComponent;
