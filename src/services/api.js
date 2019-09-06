import axios from 'axios';

const getTodos = async () => {
    return await axios.get("https://jsonplaceholder.typicode.com/todos")
}

export {getTodos};