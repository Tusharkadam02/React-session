function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = { id: id, name: "John Doe" };
            resolve(user);  
        }, 500);
    });
}

// normal function

// async function loadUser(id) {
//     try {
//         const user = await getUsrer(id);
//         console.log("User: ", user);
//     } catch (error) {
//         console.log(error.message);
//     } finally {
//         loading = false;
//     }
// }

// arrow function

const loadUser = async (id) => {    
    try {
        loading = true;
        const user = await getUser(id);
        console.log("User: ", user);
    } catch (error) {
        console.log(error.message);
    } finally {
        loading = false;
    }
};

loadUser(1);