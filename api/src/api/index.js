const express = require('express');
const tree = require('../routes/regions');

const {Router} = express;
const router = new Router();

router.use('/regions', tree);

module.exports = router;
