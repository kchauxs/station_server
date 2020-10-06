const data = require('../components/data/network');
const station = require('../components/station/network');
 

const routes = (server) => {
    server.use('/data', data);
    server.use('/station', station);
}

module.exports = routes;