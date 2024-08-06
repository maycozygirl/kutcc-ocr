import express from 'express';
import 'dotenv/config'
import apiRouter from './routes/api';

const app = express();

const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api', apiRouter);   
app.use(express.json());

app.listen(port, () => {
    console.log(`🚀 Server is running on http://localhost:${process.env.PORT}`);
});
