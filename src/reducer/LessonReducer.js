import {CREATE_LESSON, DELETE_LESSON, FIND_LESSONS_FOR_MODULE, UPDATE_LESSON} from "../actions/LessonAction";




const initialState  = {
    lessons: []
}


const LessonReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_LESSON:
            return {
                lessons: [
                    ...state.lessons,
                    action.newLesson
                ]
            }
        case FIND_LESSONS_FOR_MODULE:
            return {
                lessons: action.lessons
            }
        case DELETE_LESSON:
            return {
                lessons: state.lessons.filter(lesson => lesson._id !== action.lessonId)
            }
        case UPDATE_LESSON:
            return{
                lessons: state.lessons.map(lesson => lesson._id === action.newLessonId ? action.newLesson : lesson
                )
            }
        default:
            return state

    }

}

export default LessonReducer;