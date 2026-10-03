async function getTodo(id){
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const data = await res.json();
    return data;
}

// console.log("getTodo", getTodo(1)); // Output: Promise { <pending> }

async function loadTodo(id) {
    try {
        const todo = await getTodo(id);
        console.log("Todo: ", todo);
    } catch (error) {
        console.log(error.message);
    } finally {
        console.log("Loading completed.");
    }
};

loadTodo(1);