const store = require("./store")


const addUser = (name, email, password) => {

    if (!name || !email || !password){
        return Promise.reject("'Invalid Data User'")
    }


    


}

module.exports = {
    addUser
}