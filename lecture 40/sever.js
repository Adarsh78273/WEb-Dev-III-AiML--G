const express=require("express")
const http=require('http')
const app =express()
const socket=require('socket.io')
const port=3000

const server=http.createServer(app)
const io=new socket.server(server,
    {
    cors:{
        origin:"",
        method:["GET","POST"]
        }
    }
)

io.on("connection",(socket)=>{
    console.log("user connected with socket id",socket.id)

    io.on("message",(msg)=>{
        socket.emit(msg)
    })

    io.on("disconnect",()=>{
        console.log("user dissconnect")
    })
})

server.listen(port,()=>{
    console.log("server connected")
})