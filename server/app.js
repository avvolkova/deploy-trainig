import express from "express";


const app = express();

app.use(express.static('/dist'));

app.get('/', (_, res) => {
    console.log('Anya molodec!')
    res.send('Anya molodec!')
})

app.get("*", (req, res) => res.redirect("/"));

app.listen(process.env.PORT || 5173)
