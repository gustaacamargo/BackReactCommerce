import express from "express"
import cors from "cors"
import user from "./routes/user.route.js"

const app = express()

app.use(cors())
app.use('/users', user)

let port = 8088;
app.listen(port, () => {
    console.log(`RODANDO NA PORTA ${port}`);
})