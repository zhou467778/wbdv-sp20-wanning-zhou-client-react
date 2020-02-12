import {CREATE_MODULE, DELETE_MODULE, UPDATE_MODULE, FIND_MODULES_FOR_COURSE} from "../actions/ModuleAction";


const initialState = {
    modules: [],

}

const ModuleReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_MODULE:
            return {
                modules: [
                    ...state.modules,
                    action.newModule
                ]
    }
        case FIND_MODULES_FOR_COURSE:
            return {
                modules: action.modules
            }
        case DELETE_MODULE:
            return {
                modules: state.modules.filter(module => module._id !== action.moduleId)
            }

        case UPDATE_MODULE:
            return{
                modules: state.modules.map(module => module._id === action.newModuleId ? action.newModule : module
            )
            }

        default: return state
}
}


export default ModuleReducer;