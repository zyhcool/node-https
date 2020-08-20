const https = require('https')
const fs = require('fs');
const path = require('path')

const port = 443;
const httpsOptions = {
    key: fs.readFileSync(path.resolve(__dirname, './certificate/private.pem')),
    cert: fs.readFileSync(path.resolve(__dirname, './certificate/ca.crt'))
}


https
    .createServer(httpsOptions, async (req, res) => {
        // res.setHeader("Strict-Transport-Security", "max-age=31536000; includeSubdomains; preload")
        res.statusCode = 200;
        res.end(`this is https`);
    })
    .listen(port, () => {
        console.log(`listen at ${port}`)
    })

const http = require('http')
http.createServer((req, res) => {
    res.statusCode = 200;
    res.end('this is http');
}).listen(80)