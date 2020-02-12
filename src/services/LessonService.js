

export const findLessonForModule = async(moduleId) => {
    const response = await fetch(`https://wbdv-generic-server.herokuapp.com/api/zhou.wann/modules/${moduleId}/lessons`)
        return response.json()
}

export const createLesson = async(moduleId) => {
    const response = await fetch(`https://wbdv-generic-server.herokuapp.com/api/zhou.wann/modules/${moduleId}/lessons`, {
        method: "POST",
        body: JSON.stringify({title: "New Lesson"}),
        headers: {
            'content-type': 'application/json'
        }
    })
    return response.json()
}


export const deleteLesson = async (lessonId) => {
    const response = await fetch(`https://wbdv-generic-server.herokuapp.com/api/zhou.wann/lessons/${lessonId}`, {
        method: "DELETE"
    })
    return response.json()
}


export const findLessonById = async (lessonId) => {
    const response = await fetch(`https://wbdv-generic-server.herokuapp.com/api/zhou.wann/lessons/${lessonId}`)
    return response.json()
}

export const updateLesson = async (lesson) => {
    const response = await fetch(`https://wbdv-generic-server.herokuapp.com/api/zhou.wann/lessons/${lesson._id}`, {
        method: 'PUT',
        body: JSON.stringify(lesson),
        headers: {
            'content-type': 'application/json'
        }
    })
    return response.json()

}

export default {
    findLessonForModule,
    deleteLesson,
    createLesson,
    findLessonById,
    updateLesson
}
