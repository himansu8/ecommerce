import express from 'express'
import './dbConnect.js'
import authRoutes from './routes/authRoute.js'

const app = express();
const port = 8080;


app.use(express.json());


app.use("/api/auth", authRoutes)

app.get('/',(req,res)=>{
    res.status(200).send("server started up fine")
})
app.listen(port,()=>{
    console.log(`the server starting at port no ${port}`)
})