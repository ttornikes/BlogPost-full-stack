import express  from "express";
import postRouter from "./routes/posts.js";
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
const app =express()

app.use(express.json())
app.use("/api/posts",postRouter)
app.use("/api/user", userRoutes)
app.use("/api/auth", authRoutes)

app.listen(8800,()=>{
    console.log("conected!")
})