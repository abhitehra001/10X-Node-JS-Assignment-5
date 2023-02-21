var http = require("http");

const httpServer = http.createServer(handleServer);

httpServer.listen(3000, () => {
    console.log("Dominos app is running on port 3000");
})

function handleServer(req, res) {
    console.log(req.url);
    if(req.url==="/welcome"){
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.write("Welcome to Dominos");
        res.end();
    }
    if(req.url==="/contact"){
        res.writeHead(200, {"Content-Type": "application/json"});
        res.write(JSON.stringify({
            phone: '18602100000',
            email: 'guestcaredominos@jublfood.com'
        }));
        res.end();
    }
    res.writeHead(404);
    res.end();
}

module.exports = httpServer;