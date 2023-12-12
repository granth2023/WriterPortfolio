import express from 'express';
import next from 'next';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

const app = express();
const PORT = 3001;

//MongoDB Connection

const dbURI = process.env.MONGODB_URI; 
mongoose.connect(dbURI)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.error('Could not connect to MongoDB:', err));

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

app.post('/api/minisites', async (req, res) => {
    try{
        const miniSite = new MiniSite(req.body);
        const savedMiniSite = await miniSite.save();
        res.status(201).json(savedMiniSite);
    } catch (error){
        res.status(400).json({ message: error.message });
    }
    });


app.get('/api/minisites', async (req, res) => {
    try { 
        const minisites = await MiniSite.find();
        res.json(miniSites);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});