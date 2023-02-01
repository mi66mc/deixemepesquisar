const express = require("express")
const app = express()

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.get("/", async (req, res) => {
    if (!req.query.q) {
        res.render("index.ejs")
    } else {
        res.render("busca.ejs", { busca: req.query.q })
    }
})

app.listen(3000)