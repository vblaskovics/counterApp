console.log("Server side code is running.");
const { createClient } = require('@libsql/client');
const express = require('express');
const path = require('path');

const client = createClient({
    url: "libsql://counter-szankdav.turso.io",
    authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3MTA3NjE4MTgsImlkIjoiNWJhYmIwOTItODk0Mi00NTU1LWI3NDAtYWM3OTE0OWI1MTNjIn0.tuaOahYx0A4DoDyGkbXoRUg-YS8_flmeeYzU7vlSYMTO1KDT86jV6EzjEmozYtdui1mhBg-rXydKA5_zatmCCQ",
  });

const app = express();

app.use(express.static('./public'));
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));

app.listen(8080, () => {
    console.log("Listening in 8080!");
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/getNumber', (req, res) => {
    client
      .execute("SELECT countedNumber FROM countedNumbers")
      .then(function (result) {
        const numberFromServer = result.rows[0]['countedNumber'];
        console.log(result.rows[0]['countedNumber'].toString())
        res.status(200).json(numberFromServer);
      })
});

app.put("/increased", (req, res) => {
  client.execute("UPDATE countedNumbers SET countedNumber = countedNumber + 1");
  res.sendStatus(201);
});

app.put("/decreased", (req, res) => {
    client.execute("UPDATE countedNumbers SET countedNumber = countedNumber - 1");
    res.sendStatus(201);
  });