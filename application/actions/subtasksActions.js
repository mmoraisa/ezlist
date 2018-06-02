import { ADD_SUBTASK, TOGGLE_SUBTASK_STATUS } from './actionTypes'

export function addSubtask(taskTitle,subtask){
    return {
        type: ADD_SUBTASK,
        taskTitle,
        subtask
    }
}

export function toggleSubtaskStatus(taskTitle,subtaskTitle,completed){
    return {
        type: TOGGLE_SUBTASK_STATUS,
        taskTitle,
        subtaskTitle,
        completed
    }
}