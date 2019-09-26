const express = require('express');
const router = express.Router();

//route GET api/users
// T
router.get('/', (req, res) => res.send('User post'));

module.exports = router;
