console.log("Starting server...")

const express = require("express")
const cors = require("cors")
require("dotenv").config()

const app = express()

app.use(cors())
app.use(express.json())

const policyRoutes = require("./routes/policy.routes")
app.use("/api/policies", policyRoutes)

app.get("/", (req,res)=>{
 res.send("Backend Running")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
 console.log("Server running on port", PORT)
})

