// const url = `https://evening-coast-86301.herokuapp.com/auth`;
const devUrl = `http://localhost:5000/notes`;

export const createNote = (title, userId) => {


    return fetch(`${devUrl}/create/${userId}/${title}`, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
        // body: JSON.stringify(title)

    });

}
export const getToDos = () => {

    return fetch(`${devUrl}/to-do`);

}
export const getInProgress = () => {

    return fetch(`${devUrl}/in-progress`);

}
export const getDone = () => {

    return fetch(`${devUrl}/done`);

}
export const getDetails = async (noteId) => {

    return await fetch(`${devUrl}/details/${noteId}`);

}
export const getUserNotes = async (userId) => {

    return await fetch(`${devUrl}/owner/${userId}`);

}
export const getUsers = async () => {

    return await fetch(`${devUrl}/all-users`);

}
export const setNoteToDo = async (noteId) => {

    return await fetch(`${devUrl}/${noteId}/set-todo`, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        }
    });

}
export const setNoteInProgress = async (noteId) => {

    return await fetch(`${devUrl}/${noteId}/set-in-progress`, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        }
    });

}
export const setNoteDone = async (noteId) => {

    return await fetch(`${devUrl}/${noteId}/set-done`, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        }
    });

}
