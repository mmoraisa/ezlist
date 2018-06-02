import { ADD_TASK, LOAD_TASKS } from '../actions/actionTypes'

const INITIAL_STATE = {}

function tasksReducer(state = INITIAL_STATE, action){
    const { task, tasks } = action

    switch(action.type){
        case ADD_TASK:
            if(state.hasOwnProperty(task.title)){
                return state
            } else{
                return {
                    ...state,
                    [task.title]: task
                }
            }
        case LOAD_TASKS:
            return tasks
        default:
            return state
    }
}

export default tasksReducer