const express = require('express');
const router = express.Router();
const client = require('./db')

router.get('/createtable', async(req,res) => {
    client.query('CREATE TABLE users(username varchar(255), password varchar(255), email varchar(255), role varchar(255));')
})
// create new user
router.post('/users', async(req,res) => {
    const query = `INSERT INTO users(username, password, email, role) VALUES ($1, $2, $3, $4) RETURNING *`;

    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;
    let role = req.body.role;

    let result = await client.query(query, [username, password, email, role]);
    console.log('result aus DB (create)', result)
    res.send({ message: 'user created'})
})

module.exports = router;
