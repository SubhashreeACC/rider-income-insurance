const express = require("express")
const cors = require("cors")
require("dotenv").config()

const connectDB = require("./config/db")

const authRoutes = require("./routes/auth.routes")
const policyRoutes = require("./routes/policy.routes")
const eventRoutes = require("./routes/event.routes")
const payoutRoutes = require("./routes/payout.routes")

const app = express()

connectDB()

app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{res.send("Backend Running")})
app.use("/api/auth", authRoutes)
app.use("/api/policies", policyRoutes)
app.use("/api/events", eventRoutes)
app.use("/api/payouts", payoutRoutes)

app.listen(5000, () => {
  console.log("Server running on port 5000")
})