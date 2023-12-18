const express = require('express');
const router = express.Router();
const client = require('./db')

// test
router.get('/test', async(req, res) => {
    const anfrage = "CREATE TABLE IF NOT EXISTS users(id SERIAL PRIMARY KEY, name varchar(255), role varchar(255))"
    client.query(anfrage);
    res.send({ message: "jetzt mit PostgreSQL" });
});

// CRUD
// router.METHOD(PATH, HANDLER)
router.post('/users', async(req,res) => {
    let username = req.body.username;
    let role = req.body.role;
    const anfrage = "INSERT INTO users(name, role) VALUES ($1, $2) RETURNING *"
    let result = await client.query(anfrage, [username, role])
    console.log('result', result.rows[0])
    res.send(result.rows[0])
})
module.exports = router;