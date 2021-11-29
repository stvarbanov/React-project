// const url = `https://evening-coast-86301.herokuapp.com/auth`;
const devUrl = `http://localhost:5000/auth`;

export const register = data => {

    console.log(data);

    return fetch(`${devUrl}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)

    });

}