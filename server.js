import express from 'express';
import next from 'next';
const app = express();
const PORT = 3001;


app.listen(PORT, () => {
    console.log(`Server running on port {PORT}`);
});

app.get('/', (req, res) => {
    res.send('Welcome to my portfolio server');
});