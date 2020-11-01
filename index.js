import express from 'express';
import path from 'path';
import exphbs from 'express-handlebars';
// import routes from './src/routes';

const app = express()
const port = 3000

// view engine setup
app.set('views', path.join(__dirname, 'src/views'));
app.engine('handlebars', exphbs({defaultLayout: 'layout'}));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.render('account');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})