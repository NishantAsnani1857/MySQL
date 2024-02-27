const faker = require('faker');
const sql = require('mysql2')
const express = require('express');

const app = express()

app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.static('public'));

const connection = sql.createConnection({
    host: "localhost",
    user: 'root',
    database: "myApp",
    password: 'root'
})

app.get('/', (req, res) => {
    connection.query('select count(*) as count from users ', function (error, result, fields) {
        if (error) throw error;
        const count = result[0].count;
        res.render('home', { count })
    })

})

app.get('/joke', (req, res) => {
    var joke = 'A BAD JOKE'
    res.send(joke)
})

app.post('/register', (req, res) => {
    console.log(req.body);
    let person = {
        email: req.body.email,
    }
    console.log(person.email);
    connection.query('insert into users set ? ', person, function (error, result, fields) {
        if (error) throw error;
        console.log(result);
    })

    res.redirect('/')
})


app.listen(3000, () => {
    console.log('listening to localhost 3000');
})