
let server = require("./server")
let router = require("./route")

server.start(router.route)
