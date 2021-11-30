
//https://github.com/typicode/json-server
//fake REST API
// eslint-disable-next-line no-undef
const jsonServer = require('json-server')
const app = jsonServer.create()
const router = jsonServer.router('db.json')
// eslint-disable-next-line no-undef
const path = require('path')


const middlewares = jsonServer.defaults({
    // eslint-disable-next-line no-undef
    static: path.join(__dirname, './build')
})

app.use(middlewares)
app.use(router)

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log("JSON server is running on port 3001")
});

app.get('/health', (req, res) => {
    res.send('ok')
  })
