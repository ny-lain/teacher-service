const express = require('express');
const app = express();
app.use(express.json());

app.post('/addassignment', (req, res) => {
    res.send('<html><body>INSIDE UPDATE PROFILE API..</body></html>')
})

app.get("/searchstudent", (req, res) => {
    res.send('<html><body>INSIDE SEARCH STUDENT API..</body></html>')
})

app.delete('/removestudent', (req, res) => {
    res.send('<html><body>INSIDE REMOVE STUDENT API..</body></html>')
})

app.listen(5002, () =>
    console.log('EXPRESS Server Started at Port No: 5002'));