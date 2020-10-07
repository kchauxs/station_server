const store = require("./store")


const addUser = (name, email, password) => {

    if (!name || !email || !password) {
        return Promise.reject("'Invalid Data User'")
    }

    const user = {
        name,
        email,
        password
    }

    return store.add(user)

}

module.exports = {
    addUser
}