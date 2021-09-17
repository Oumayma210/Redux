import { ADD_TODO, DELETE, DONE, EDIT } from "./../actions/actionsTypes";
let initialState = {
    todo: [
        { task: "learn React", id: 1, Done: false },
        { task: "learn redux", id: 2, Done: false },
        { task: "learn API", id: 3, Done: false },
    ],
};

export const toDoReducer = (state = initialState, action) => {
    const { payload, type } = action;
    switch (type) {
        case ADD_TODO:
            return { ...state, todo: [...state.todo, payload] };
        case DELETE:
            return {
                ...state,
                todo: [...state.todo.filter((el) => el.id !== payload)],
            };
        case EDIT:
            return {
                ...state,
                todo: state.todo.map((el) =>
                    el.id == payload.id ? { ...el, task: payload.task } : el
                ),
            };
        case DONE:
            return {
                ...state,
                todo: state.todo.map((el) =>
                    el.id == payload ? { ...el, Done: !el.Done } : el
                ),
            };
        default:
            return state;
    }
};
