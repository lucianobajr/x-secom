const app = require("../src/app")
const http = require("http")

const port = process.env.PORT || 3333;
app.set('port',port);

const server = http.createServer(app);

server.listen(port,()=>console.log(`server is running in ${port}! 🔥`))