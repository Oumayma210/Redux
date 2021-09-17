import { ADD_TODO, DELETE, EDIT, DONE } from "./actionsTypes";
//action creator(addtodo)
export const addTodo = (NewItem) => {
    return {
        type: ADD_TODO,
        payload: NewItem,
    };
};
export const Delete = ( id) => {
    return {
        type: DELETE,
        payload: id,
    };
};
export const Edittodo = (payload) => {
    return {
        type: EDIT,
        payload,
    };
};
export const Done = (id) => {
    return {
        type: DONE,
        payload:id,
    };
}