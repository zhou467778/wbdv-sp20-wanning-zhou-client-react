
export const CREATE_LESSON = "CREATE_LESSON";

export const createLesson_dis = (lesson) => ({
    type: CREATE_LESSON,
    newLesson: lesson
})

export const DELETE_LESSON = "DELETE_LESSON";

export const deleteLesson_dis = (lessonId) => ({
    type: DELETE_LESSON,
    lessonId: lessonId

})

export const FIND_LESSONS_FOR_MODULE = "FIND_LESSONS_FOR_MODULE ";

export const findLessonForModule_dis = (lessons) => ({
    type: FIND_LESSONS_FOR_MODULE,
    lessons: lessons
})

export const UPDATE_LESSON ="UPDATE_LESSON";

export const updateLesson_dis = (lesson) =>({
    type: UPDATE_LESSON,
    newLesson: lesson,
    newLessonId : lesson._id
})

