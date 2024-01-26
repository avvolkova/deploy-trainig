import express from "express";
import cors from "cors";


const app = express();

app.use(express.static('/dist'));
app.use(cors())
app.use(express.json())

app.get('/anya', (_, res) => {
    console.log('Anya molodec!')
    res.json({whoIsAnya: 'Anya molodec х3!'})
})

app.listen(process.env.PORT || 5000)
