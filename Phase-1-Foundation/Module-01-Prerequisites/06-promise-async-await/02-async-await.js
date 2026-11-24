function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = { id: id, name: 'John Doe' };
            resolve(user);
        }, 500);
    });
}

// normal function
async function loadUser(id) {
    try{
        loading = true;
        const user = await getUser(id);
        console.log("user", user);
    } catch (err) {
        console.log(err.message);
    } finally {
        loading = false;
    }
}

loadUser(1);