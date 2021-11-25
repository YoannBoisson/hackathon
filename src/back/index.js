/* eslint-disable no-lonely-if */
/* eslint-disable import/order */
const connection = require('./db-config');
const express = require('express');

const app = express(); // pour quqe ca fonctionne sur l'app react
const cors = require('cors'); // pour quqe ca fonctionne sur l'app react

const port = process.env.PORT_BACK || 3005;

// connection a la bd

connection.connect((err) => {
  if (err) {
    console.log(err);
    console.error(`error connecting: ${err.stack}`);
  } else {
    console.log(
      `connected to database with threadId :  ${connection.threadId}`
    );
  }
});

app.use(express.json()); // permet de receptionner du json
app.use(cors()); // Use this after the variable declaration

app.get('/users', (req, res) => {
  connection.query('SELECT * FROM users', (err, result) => {
    if (err) {
      res.status(500).send('Error retrieving data from database');
      console.log(err);
    } else {
      res.status(200).json(result);
    }
  });
});

app.get('/users/:id', (req, res) => {
  const usersID = req.params.id;
  connection.query(
    'SELECT * FROM users WHERE id = ?',
    [usersID],
    (err, result) => {
      if (err) {
        res.status(500).send('Error retrieving data from database');
      } else {
        // si result n'est pas un tableau vide
        if (result.length) {
          res.json(result[0]);
        } else {
          res.status(404).send('user not found');
        }
      }
    }
  );
});

app.post('/users', (req, res) => {
  const { username, password, email } = req.body;
  connection.query(
    'INSERT INTO users( username, password, email ) VALUES (?,?,?)',
    [username, password, email],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send('Error saving the user');
      } else {
        const id = result.insertId;
        const createUsers = {
          id,
          username,
          password,
          email,
        };
        res.status(201).send(createUsers);
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
