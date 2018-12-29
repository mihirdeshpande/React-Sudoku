const express = require('express')
const app = express()
const port = 8080

app.use(express.static('.'));

app.get('/test', function(req, res) {
    res.sendFile('./hello.html', {root: __dirname })
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


