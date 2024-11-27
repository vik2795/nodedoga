import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const PORT=3000;

const root=path.dirname(fileURLToPath(import.meta.url))

const app=express()

const users = [
    { id: "1",  name: "John Doe" },
    { id: "2", name: "Jane Smith" },
    { id: "3", name: "Sam Johnson" },
];

app.use(express.json())

app.use(express.static(path.join(root,'public')))
app.get("hi",(res,req)=>{res.send("Hi,there!")})

app.get("/",(res,req)=>{res.sendFile(path.join(root,'public','index.html'))})

app.get("/express",(req,res)=>{res.send("Az Express egy minimalista webes keretrendszer, amely a Node.js-hez készült.")})

app.get("/greeting",(req,res)=>res.send("Hello,Viki!"))

app.get("/nodejs",(res,req)=>{res.send("A Node.js egy olyan szerveroldali JavaScript futtatókörnyezet, amely a V8 JavaScript motorra épül.")})

app.listen(PORT,()=>{console.log({PORT})})

app.get("/users",(req,res)=>{res.status(200).json(users)})

app.get("/id",())

