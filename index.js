const express = require('express');
const app = express();

const handlebars = require('express-handlebars').create({
    defaultLayout: 'main'
  });
  app.engine('handlebars', handlebars.engine);
  app.set('view engine', 'handlebars');

const http = require('http');


const hostname = 'localhost';
const port = 3000;


const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Welcome to the world of Node development!\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})

app.set('port', process.env.PORT || 3000);

app.get('/', (request, response) => {
    response.render('beginning');
});
  
app.get('/middle', (request, response) => {
    response.render('middle');
});
  
app.get('/end', (request, response) => {
    response.render('end');
});

  app.listen(app.get('port'), () => {
    console.log(
      'Express started on http://localhost:' +
        app.get('port') +
        '; press Ctrl-C to terminate.'
    );
  });