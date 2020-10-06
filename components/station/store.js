const Model = require('./model');

const addStation = (station) => {
    const myStation = new Model(station);
    return myStation.save();
}

const listStation = () => {
    return Model.find()
}

const queryStation = async (data) => {
    const foundData = await Model.findOne(data);
    return foundData;

}


module.exports = {
    add: addStation,
    list: listStation,
    query: queryStation,
}