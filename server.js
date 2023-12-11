import express from 'express';
import next from 'next';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import dotenv from 'dotenv';

dotenv.config();

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

const app = express();
const PORT = 3001;

//Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));



// app.get('/', (req, res) => {
//     res.send('Welcome to my portfolio server');
// });

app.get('/api/projects', (req, res) => {

    res.send('Proejcts data will be here soon')
});


nextApp.prepare().then(() => {
    app.get('*', (req, res) => {
        return handle(req, res);
    });
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);

    });
})

