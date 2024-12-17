const express = require('express');
const connection = require('./db/connection');

const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/users', (req, res) => {
    const { name, last_name } = req.body;

    if (!name || !last_name) {
        return res.status(400).json({ error: 'Name and Last Name is required' });
    }

    const query = 'INSERT INTO users (name, last_name) VALUES (?, ?)';
    connection.query(query, [name, last_name], (err, results) => {
        if (err) {
            console.error('Error inserting the user:', err.message);
            return res.status(500).json({ error: 'Error creating the user.' });
        }
        res.status(201).json({ message: 'User successfully created.', id: results.insertId });
    });
});

app.get('/users', (req, res) => {
    const query = 'SELECT name, last_name FROM users';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error getting users:', err.message);
            return res.status(500).json({ error: 'Error getting users' });
        }
        res.json(results);
    });
});


app.listen(PORT, () => {
    console.log(`Server Running`);
});