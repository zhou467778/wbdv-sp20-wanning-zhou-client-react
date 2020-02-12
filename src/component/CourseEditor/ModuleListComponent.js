import React from "react";
import "../../css/CourseEditorStyle.css"
import {createModule_dis, deleteModule_dis, findModuleForCourse_dis, updateModule_dis} from "../../actions/ModuleAction";
import {connect} from "react-redux";
import ModuleService from "../../services/ModuleService"
import "../../../node_modules/font-awesome/css/font-awesome.css"
import "bootstrap/dist/css/bootstrap.css"
import {Link} from "react-router-dom";
import ModuleItemComponent from "./ModuleItemComponent";



class ModuleListComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            editingModule: '',
            selectingModuleId: this.props.moduleId
        }
    }

    componentDidMount() {
        this.props.findModuleForCourse(this.props.courseId)
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.courseId !== prevProps.courseId) {
            this.props.findModuleForCourse(this.props.courseId)
        }
    }


    render() {
        return(

            <div className="wbdv-module-list">
                <div className="list-group wbdv-module-list">
                    {this.props.modules && this.props.modules.map ((module) =>

                        <Link to={`/course-editor/${this.props.courseTitle}/${this.props.courseId}/module/${module._id}`}>
                            <ModuleItemComponent

                                key = {module._id}
                                module = {module}

                                edit = {() => {this.props.history.push(`/course-editor/${this.props.courseTitle}/${this.props.courseId}`)
                                    this.setState({
                                    editingModule: module._id})}}
                                select = {() => {
                                    this.props.history.push(`/course-editor/${this.props.courseTitle}/${this.props.courseId}`)
                                    this.setState({
                                        selectingModuleId : module._id
                                    })
                                }}
                                save={() => this.setState({
                                    editingModule: ''
                                })}
                                editing = {this.state.editingModule === module._id}
                                selecting = {this.state.selectingModuleId === module._id}
                                deleteModule = {this.props.deleteModule}
                                updateModule = {this.props.updateModule}

                            />
                        </Link>
                    )
                    }

                    <a type="button" className="wbdv-module-item-add-btn"
                    onClick={() => this.props.createModule(this.props.courseId)}> + </a>


                </div>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => {
    return {
        modules: state.modules.modules
    }
}

const dispatchToPropertyMapper = (dispatch) => {
    return {

        findModuleForCourse: (courseId) => {
            ModuleService.findModuleForCourse(courseId)
                .then(actualModules => dispatch(
                    findModuleForCourse_dis(actualModules)
                ))},

        createModule: (courseId) => {
            ModuleService.createModule(courseId)
                .then(actualModule =>
                    dispatch(createModule_dis(actualModule)))
        },

        deleteModule: (moduleId) =>
            ModuleService.deleteModule(moduleId)
                .then(status =>
                    dispatch(deleteModule_dis(moduleId))),

        updateModule: (module) =>
            ModuleService.updateModule(module)
                .then(newModule =>
                    dispatch(updateModule_dis(newModule))
                )



    }
}




export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)
(ModuleListComponent)