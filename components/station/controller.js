const store = require("./store")

const addStation = ({ name, latitude, longitude }) => {

   
    // if (!name || !latitude || !longitude) {
    //     return Promise.reject('Invalid Data Station')
    // }

    const station = {
        name,
        latitude,
        longitude
    }

    return store.add(station)

}

const listStations = () => {
    return store.list()
}

module.exports = {
    addStation,
    listStations
}