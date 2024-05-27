const express = require('express');
const admin = require('firebase-admin');
const app = express();
const port = 3000;

admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: "https://<your-database-name>.firebaseio.com"
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
