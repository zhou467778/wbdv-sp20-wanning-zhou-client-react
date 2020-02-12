

export const findTopicForLesson = async(lessonId) => {
    const response = await fetch(`https://wbdv-generic-server.herokuapp.com/api/zhou.wann/lessons/${lessonId}/topics`)
    return response.json()
}

export const createTopic = async(lessonId) => {
    const response = await fetch(`https://wbdv-generic-server.herokuapp.com/api/zhou.wann/lessons/${lessonId}/topics`, {
        method: "POST",
        body: JSON.stringify({title: "New Topic"}),
        headers: {
            'content-type': 'application/json'
        }
    })
    return response.json()
}


export const deleteTopic = async (topicId) => {
    const response = await fetch(`https://wbdv-generic-server.herokuapp.com/api/zhou.wann/topics/${topicId}`, {
        method: "DELETE"
    })
    return response.json()
}


export const findTopicById = async (topicId) => {
    const response = await fetch(`https://wbdv-generic-server.herokuapp.com/api/zhou.wann/topics/${topicId}`)
    return response.json()
}

export const updateTopic = async (topic) => {
    const response = await fetch(`https://wbdv-generic-server.herokuapp.com/api/zhou.wann/topics/${topic._id}`, {
        method: 'PUT',
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    })
    return response.json()

}

export default {
    findTopicById,
    deleteTopic,
    createTopic,
    findTopicForLesson,
    updateTopic
}
