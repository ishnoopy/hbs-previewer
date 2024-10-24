const express = require('express');
const app = express();
const http = require('http');
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');
const routes = require('./routes');

const PORT = 3000;
const HOST = "localhost";
const BACKLOG = 511;

app.engine('hbs', engine({
  extname: 'hbs',
  defaultLayout: 'main'
}))
app.set('view engine', 'hbs')
app.set('views', './views')
app.use(express.static('public'))
app.use(bodyParser.json());

app.use('/', routes);
  
const server = http.createServer(app)

server.listen(3000, HOST, 511, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})

server.on('error', (error) => {
  if (error.code === "EADDRINUSE") {
    console.error("Port is already in use, retrying...");
    setTimeout(() => {
      server.close();
      server.listen(3000, HOST, BACKLOG, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
      })
    }, 1000)
  }
})


