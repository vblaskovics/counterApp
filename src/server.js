console.log("Server side code is running.");
const { createClient } = require('@libsql/client');
const express = require('express');
const path = require('path');

const client = createClient({
    url: "libsql://counter-szankdav.turso.io",
    authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3MTA3NjE4MTgsImlkIjoiNWJhYmIwOTItODk0Mi00NTU1LWI3NDAtYWM3OTE0OWI1MTNjIn0.tuaOahYx0A4DoDyGkbXoRUg-YS8_flmeeYzU7vlSYMTO1KDT86jV6EzjEmozYtdui1mhBg-rXydKA5_zatmCCQ",
  });

const app = express();

app.use(express.static(__dirname + '/public'));
app.use('/css', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/js')));

app.listen(8080, () => {
    console.log("Listening in 8080!");
})

app.get('/', async (req, res) => {
    try {
      await res.sendFile(__dirname + '/public/index.html');
    } catch (error) {
      res.status(404).json({ error: "Page not found!" });
    }
});

app.get('/getNumber', async (req, res) => {
    try {
      await client
      .execute("SELECT countedNumber FROM countedNumbers")
      .then(function (result) {
        const numberFromServer = result.rows[0]['countedNumber'];
        console.log(result.rows[0]['countedNumber'].toString())
        res.status(200).json(numberFromServer);
      })
    } catch (error) {
      console.error("Error while fetching the data:", error);
		  res.status(500).json({ error: "An error occurred while fetching data." });
    }
});

app.put("/increased", async (req, res) => {
  try {
    await client.execute("UPDATE countedNumbers SET countedNumber = countedNumber + 1");
    res.sendStatus(201);
  } catch (error) {
    console.error("Error while increasing the number:", error);
		res.status(500).json({ error: "An error occurred increasing the number." });
  }
});

app.put("/decreased", async (req, res) => {
    try {
      await client.execute("UPDATE countedNumbers SET countedNumber = countedNumber - 1");
      res.sendStatus(201);
    } catch (error) {
      console.error("Error while decreasing the number:", error);
		  res.status(500).json({ error: "An error occurred decreasing the number." });
    }
  });