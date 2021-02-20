const express = require("express")
const cors = require("cors")
const user = require("./routes/user.route")
const category = require("./routes/category.route")
const product = require("./routes/product.route")

const app = express()
app.use(express.json());
app.use(cors())
app.use('/users', user)
app.use('/categories', category)
app.use('/products', product)

let port = 8088;
app.listen(port, () => {
    console.log(`RODANDO NA PORTA ${port}`);
})