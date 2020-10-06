const express = require('express');
const { success, error } = require('../../network/response');
const controller = require("./controller")
const router = express.Router();

router.post('/add', (req, res) => {
    controller.addStation(req.body)
        .then(data => {
            success(req, res, data, 201);
        })
        .catch(err => {
            error(req, res, 'Internal error', 404, err);
        });
});

router.get('/', (req, res) => {
    controller.listStations()
        .then(data => {
            success(req, res, data, 200);
        })
        .catch(err => {
            error(req, res, 'Internal error', 404, err);
        });
});


module.exports = router