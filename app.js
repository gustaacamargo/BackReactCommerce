const express = require("express")
const cors = require("cors")
const user = require("./routes/user.route")
const category = require("./routes/category.route")

const app = express()
app.use(express.json());
app.use(cors())
app.use('/users', user)
app.use('/categories', category)

let port = 8088;
app.listen(port, () => {
    console.log(`RODANDO NA PORTA ${port}`);
})