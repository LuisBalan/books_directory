import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.send("Hello, TypeScript with Express!");
})

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})