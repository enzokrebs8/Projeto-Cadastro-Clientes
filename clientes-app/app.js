const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const clienteRoutes = require('./routes/clienteRoutes');

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/clientes', clienteRoutes);

app.get('/', (req, res) => {
    res.redirect('/clientes');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
