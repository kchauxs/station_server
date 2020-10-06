const express = require('express');
const { success, error } = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.post('/add', (req, res) => {
    controller.addData(req.body)
        .then(data => {
            success(req, res, data, 201);
        })
        .catch(err => {
            error(req, res, 'Internal error', 404, err);
        });
});

router.get('/', (req, res) => {
    controller.listData()
        .then(users => {
            success(req, res, users, 200);
        })
        .catch(err => {
            error(req, res, 'Internal error', 404, err);
        });
});

module.exports = router;