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
import WidgetReducer from "../../reducer/WidgetReducer";
import WidgetListComponent from "./WidgetListComponent";


const rootReducer = combineReducers({
    modules: ModuleReducer,
    lessons: LessonReducer,
    topics: TopicReducer,
    widgets: WidgetReducer


})

const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const CourseEditorComponent = ({history, courseId, courseTitle, moduleId, lessonId, topicId}) =>
    <Provider store={store}>
        <div className=" bg-white wbdv-main">
            <div className="wbdv-button-course-title">
                <button onClick={() => {
                    history.push("/");
                    topicId = null;
                }}
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

            <WidgetListComponent
                topicId = {topicId}
                />


        </div>
    </Provider>


export default CourseEditorComponent;
