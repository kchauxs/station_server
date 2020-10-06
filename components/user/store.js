const Model = require("./model")

const addUser = (User) => {
    const myUser = new Model(User);
    return myUser.save();
}

const listUser = () => {
    return Model.find()
}

const queryUser = async (data) => {
    const foundData = await Model.findOne(data);
    return foundData;

}


module.exports = {
    add: addUser,
    list: listUser,
    query: queryUser,
}