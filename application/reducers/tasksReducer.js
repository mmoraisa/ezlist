import { ADD_TASK, LOAD_TASKS, ADD_SUBTASK, TOGGLE_SUBTASK_STATUS } from '../actions/actionTypes'

const INITIAL_STATE = {}

function tasksReducer(state = INITIAL_STATE, action){
    const { task, taskTitle, tasks, subtask, subtaskTitle, completed } = action

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
        case ADD_SUBTASK:
            return {
                ...state,
                [taskTitle]: {
                    ...state[taskTitle],
                    subtasks: {
                        ...state[taskTitle]['subtasks'],
                        [subtask.title]: subtask
                    }
                }
            }
        case TOGGLE_SUBTASK_STATUS:
            return {
                ...state,
                [taskTitle]: {
                    ...state[taskTitle],
                    subtasks: {
                        ...state[taskTitle]['subtasks'],
                        [subtaskTitle]: {
                            ...state[taskTitle]['subtasks'][subtaskTitle],
                            completed
                        }
                    }
                }
            }
        case LOAD_TASKS:
            return tasks
        default:
            return state
    }
}

export default tasksReducer