import { ADD_TASK, LOAD_TASKS } from './actionTypes'

export function addTask(task){
    return {
        type: ADD_TASK,
        task
    }
}

export function loadTasks(tasks){
    return {
        type: LOAD_TASKS,
        tasks
    }
}