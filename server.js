const express = require('express')
const nunjucks = require('nunjucks')
const routes = require("./routes")
const methodOverride = require('method-override')

const server = express()

// linha de código responsável por fazer funcionar o req.body
server.use(express.urlencoded({ extended: true }))

server.use(express.static('public'))

// methodOverride sendo usado para sobrescrever o method="POST",
// faz funcionar os metodos PUT e DELETE
server.use(methodOverride('_method'))

server.use(routes)


server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})


server.listen(5000, function() {
    console.log("server is runing")
})