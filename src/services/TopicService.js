

export const findTopicForLesson = async(lessonId) => {
    const response = await fetch(`https://cs4550-wanning.herokuapp.com/api/lessons/${lessonId}/topics`)
    return response.json()
}

export const createTopic = async(lessonId) => {
    const response = await fetch(`https://cs4550-wanning.herokuapp.com/api/lessons/${lessonId}/topics`, {
        method: "POST",
        body: JSON.stringify(
            {title: "New Topic",
                id: parseInt(Math.random()*1000+1)
        }),
        headers: {
            'content-type': 'application/json'
        }
    })
    return response.json()
}


export const deleteTopic = async (topicId) => {
    const response = await fetch(`https://cs4550-wanning.herokuapp.com/api/topics/${topicId}`, {
        method: "DELETE"
    })
    return response.json()
}


export const findTopicById = async (topicId) => {
    const response = await fetch(`https://cs4550-wanning.herokuapp.com/api/topics/${topicId}`)
    return response.json()
}

export const updateTopic = async (topic) => {
    const response = await fetch(`https://cs4550-wanning.herokuapp.com/api/topics/${topic.id}`, {
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
