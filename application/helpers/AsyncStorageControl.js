import { AsyncStorage } from 'react-native'
import { EZLIST_STORAGE_TASKS_KEY } from './Config'

const INITIAL_TASKS = {}

export function setInitialTasks() {
    return AsyncStorage.getItem(EZLIST_STORAGE_TASKS_KEY)
        .then((tasks) => {
            //AsyncStorage.clear()
            if(!tasks)
                return saveTasks(INITIAL_TASKS)
        })
}

export function getTasks() {
    return AsyncStorage.getItem(EZLIST_STORAGE_TASKS_KEY)
        .then(JSON.parse)
}

export function addTaskToStorage(task){
    return AsyncStorage.mergeItem(EZLIST_STORAGE_TASKS_KEY, JSON.stringify({
        [task.title]: task
    }))
}

export async function addSubtaskToTask(subtask,task){
    task.subtasks[subtask.title] = subtask
    return AsyncStorage.mergeItem(EZLIST_STORAGE_TASKS_KEY, JSON.stringify({
        [task.title]: task,
    }))
}

export async function toggleSubtaskCompletion(complete,subtask,task){
    task.subtasks[subtask.title].complete = complete
    return AsyncStorage.mergeItem(EZLIST_STORAGE_TASKS_KEY, JSON.stringify({
        [task.title]: task,
    }))
}

export function saveTasks(tasks){
    return AsyncStorage.setItem(EZLIST_STORAGE_TASKS_KEY, JSON.stringify(tasks))
}