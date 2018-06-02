import { ADD_TASK } from '../actions/actionTypes'

const INITIAL_STATE = {}

function tasksReducer(tasks = INITIAL_STATE, action){
    const { task } = action

    switch(action.type){
        case ADD_TASK:
            if(tasks.hasOwnProperty(task.title)){
                return tasks
            } else{
                return {
                    ...tasks,
                    [task.title]: task
                }
            }
        default:
            return tasks
    }
}

export default tasksReducer