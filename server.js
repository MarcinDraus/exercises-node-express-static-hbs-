// let express = require('express');
// let app = express();
// let bodyParser = require('body-parser')
// let port = process.env.PORT || 3000;
// app.use(bodyParser.text());

// app.use(bodyParser.json());
// let route = require('./route.js');
// route(app);

// app.listen(port);
// console.log("Our app started on port  " + port);


const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');
const app = express();

app.engine('hbs', hbs({ extname: 'hbs', layoutsDir: path.join(__dirname, 'views/layouts'), defaultLayout: 'main' }));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, '/public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.post('/contact/send-message', (req,res) => {
  const { author, sender, title, message } = req.body;

  if(author && sender && title && message) {
    res.render('contact', {isSend: true});
  }
  else {
    res.render('contact', {isError: true})
  }
});

app.get('/hello/:name', (req, res) => {
  res.render('hello', { layout: false, name: req.params.name });
});

app.use((req, res) => {
  res.sendFile(path.join(__dirname, '/public/page-not-found.png'));
});

app.listen(3000, () => {
  console.log('Server is running on port: 3000');
});




// const express = require('express');
// const path = require('path');
// const hbs = require('express-handlebars');
// const app = express();

// //app.engine('hbs',hbs());
// app.engine('hbs', hbs({ extname: 'hbs', layoutsDir: './layouts', defaultLayout: 'main' }));
// app.set('view engine', '.hbs');


// app.use(express.static(path.join(__dirname, '/public')));

// app.use((req, res, next) => {
//   res.show = (name) => {
//     res.sendFile(path.join(__dirname, `views/${name}`));
//   };
//   next();
// });

// app.get('/', (req, res) => {
//   res.render('index' );
// });

// app.get('/about', (req, res) => {
//   res.render('about');
// });

// app.get('/contact', (req, res) => {
//   res.show('contact.html');
// });

// app.get('/info', (req, res) => {
//   res.show('info.html');
// });

// app.get('/history', (req, res) => {
//   res.show('history.html');
// });

// app.get('/hello/:name', (req,res) => {
//     res.render('hello', {layout: false, name: req.params.name})
// });

// app.use((req, res) => {
//     res.sendFile(path.join(__dirname, '/public/page-not-found.png'));
// });


// app.listen(3000, () => {
//   console.log('Server is running on port: 3000');
// });




