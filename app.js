
//https://github.com/typicode/json-server
//fake REST API
const jsonServer = require('json-server')
const app = jsonServer.create()
const router = jsonServer.router('db.json')
const path = require('path')


const middlewares = jsonServer.defaults({
    static: path.join(__dirname, './build')
})

app.use(middlewares)
app.use(router)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("server started on port 3000");
});
