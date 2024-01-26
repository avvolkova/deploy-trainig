import express from "express";
import cors from "cors";
import * as path from "path";


const app = express();

app.use(express.static('/dist'));
app.use(cors())
app.use(express.json())
app.use(express.static('dist'))

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});


app.get('/anya', (_, res) => {
    console.log('Anya molodec!')
    res.json({whoIsAnya: 'Anya molodec х3!'})
})

app.get("*", (req, res) => res.redirect("/"));


app.listen(process.env.PORT || 5000)
