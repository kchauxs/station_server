
const Model = require('./model');

const addData = (data) => {
    const myData = new Model(data);
    return myData.save();
}
const listData = () => {
    return Model.find()
}

module.exports = {
    add: addData,
    list: listData,
}