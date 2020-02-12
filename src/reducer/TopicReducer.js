import {CREATE_TOPIC,DELETE_TOPIC,FIND_TOPICS_FOR_LESSON,UPDATE_TOPIC} from "../actions/TopicAction";


const initialState  = {
    topics: []
}


const TopicReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_TOPIC:
            return {
                topics: [
                    ...state.topics,
                    action.newTopic
                ]
            }
        case FIND_TOPICS_FOR_LESSON:
            return {
                topics: action.topics
            }
        case DELETE_TOPIC:
            return {
                topics: state.topics.filter(topic => topic._id !== action.topicId)
            }
        case UPDATE_TOPIC:
            return{
                topics: state.topics.map(topic => topic._id === action.newTopicId ? action.newTopic : topic
                )
            }
        default:
            return state

    }

}

export default TopicReducer;