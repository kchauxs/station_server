const store = require('./store')
const storeStation = require('../station/store')

const addData = async ({ station, temp, devicetemp, humidity, rainintensity }) => {
    if (!station || !temp || !devicetemp || !humidity || !rainintensity) {
        return Promise.reject('Invalid Data')
    }

    const validate = await storeStation.query({_id:station})
    
    if(!validate){
        return Promise.reject('Invalid Station')
    }

    const data = {
        station,
        temp,
        devicetemp,
        humidity,
        rainintensity
    }
    return store.add(data);
} 

const listData = ()=>{
    return store.list()
}


module.exports = {
    addData,
    listData

}