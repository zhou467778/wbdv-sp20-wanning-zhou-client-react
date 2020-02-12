

export const findModuleForCourse = (courseId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/zhou.wann/courses/${courseId}/modules`)
        .then(response => response.json())

export const createModule = async(courseId) => {
    const response = await fetch(`https://wbdv-generic-server.herokuapp.com/api/zhou.wann/courses/${courseId}/modules`, {
        method: "POST",
        body: JSON.stringify({title: "New Module"}),
        headers: {
            'content-type': 'application/json'
        }
    })
    return response.json()
}


export const deleteModule = async (moduleId) => {
    const response = await fetch(`https://wbdv-generic-server.herokuapp.com/api/zhou.wann/modules/${moduleId}`, {
        method: "DELETE"
    })
    return response.json()
}


export const findModuleById = async (moduleId) => {
    const response = await fetch(`https://wbdv-generic-server.herokuapp.com/api/zhou.wann/modules/${moduleId}`)
        return response.json()
}

export const updateModule = async (module) => {
    const response = await fetch(`https://wbdv-generic-server.herokuapp.com/api/zhou.wann/modules/${module._id}`, {
        method: 'PUT',
        body: JSON.stringify(module),
        headers: {
            'content-type': 'application/json'
        }
    })
    return response.json()

}

export default {
    findModuleForCourse,
    deleteModule,
    createModule,
    findModuleById,
    updateModule
}