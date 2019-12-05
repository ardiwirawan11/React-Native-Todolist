import { TODO_ADD } from '../type/TodoType';

const initialState = {
    data: [],
    // todos: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case TODO_ADD:
            // let todos = {...state.todos}.push(action.payload)
            console.log('Todo Reducer payload', action)
            return [{
                ...state,
                data: action.payload
                }
            ]
            default:
                return state
    }
}