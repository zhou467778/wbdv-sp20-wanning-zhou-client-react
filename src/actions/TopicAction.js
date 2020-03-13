
export const CREATE_TOPIC = "CREATE_TOPIC";

export const createTopic_dis = (topic) => ({
    type: CREATE_TOPIC,
    newTopic: topic
})

export const DELETE_TOPIC = "DELETE_TOPIC";

export const deleteTopic_dis = (topicId) => ({
    type: DELETE_TOPIC,
    topicId: topicId

})

export const FIND_TOPICS_FOR_LESSON = "FIND_TOPICS_FOR_LESSON ";

export const findTopicForLesson_dis = (topics) => ({
    type: FIND_TOPICS_FOR_LESSON,
    topics: topics
})

export const UPDATE_TOPIC ="UPDATE_TOPIC";

export const updateTopic_dis = (topic) =>({
    type: UPDATE_TOPIC,
    newTopic: topic,
    newTopicId : topic.id
})

