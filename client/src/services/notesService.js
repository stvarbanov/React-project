// const url = `https://evening-coast-86301.herokuapp.com/auth`;
const devUrl = `http://localhost:5000/notes`;

export const createNote = (title, userId) => {
    console.log(JSON.stringify(title));

    return fetch(`${devUrl}/create/${userId}/${title}`, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
        // body: JSON.stringify(title)

    });

}