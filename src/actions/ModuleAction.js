
export const CREATE_MODULE = "CREATE_MODULE";

export const createModule_dis = (module) => ({
    type: CREATE_MODULE,
    newModule: module
})

export const DELETE_MODULE = "DELETE_MODULE";

export const deleteModule_dis = (moduleId) => ({
    type: DELETE_MODULE,
    moduleId: moduleId

})

export const FIND_MODULES_FOR_COURSE = "FIND_MODULES_FOR_COURSE";

export const findModuleForCourse_dis = (modules) => ({
    type: FIND_MODULES_FOR_COURSE,
    modules: modules
})

export const UPDATE_MODULE ="UPDATE_MODULE";

export const updateModule_dis = (module) =>({
    type: UPDATE_MODULE,
    newModule: module,
    newModuleId : module._id
})


