import { TODO_ADD } from '../type/TodoType';

export const addTodo = data => {
    console.log(data)
    return {
        type: TODO_ADD,
        payload: data
    }
}