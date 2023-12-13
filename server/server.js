// import express from 'express';
// import next from 'next';
// import cors from 'cors';
// import bodyParser from 'body-parser';
// import morgan from 'morgan';
// import dotenv from 'dotenv';
// import mongoose from 'mongoose';
// import miniSiteRoutes from '../routes/miniSiteRoutes.js';

// dotenv.config();

// const dev = process.env.NODE_ENV !== 'production';
// const nextApp = next({ dev });
// const handle = nextApp.getRequestHandler();

// const app = express();
// const PORT = 3001;

// //MongoDB Connection

// const dbURI = process.env.MONGODB_URI; 
// mongoose.connect(dbURI)
//     .then(() => console.log('MongoDB connected...'))
//     .catch(err => console.error('Could not connect to MongoDB:', err));

// //Middlewares
// app.use(cors());
// app.use(bodyParser.json());
// app.use(morgan('dev'));



// app.use('/api/minisites', miniSiteRoutes);
// app.get('/api/test', (req, res) => res.send('Test route is working'));


// nextApp.prepare().then(() => {
//     app.get('*', (req, res) => {
//         return handle(req, res);
//     });
//     app.listen(PORT, () => {
//         console.log(`Server running on port ${PORT}`);

//     });
// })

// //


import express from 'express';

const app = express();
const PORT = 3001;

app.get('/api/test', (req, res) => {
    res.send('Test route is working');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
