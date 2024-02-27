const faker = require('faker');
const sql = require('mysql2')



const connection = sql.createConnection({
    host: "localhost",
    user: 'root',
    database: "myApp",
    password: 'root'
})





// for (i = 0; i < 500; i++) {
//     let person = {
//         email: faker.internet.email(),
//         created_at: faker.date.past()
//     }

//     connection.query('INSERT INTO USERS SET ?', person, function (error, result, fields) {
//         if (error) throw error;
//         console.log('The result is :', result);
//     })

// } //Users created

connection.query('select * from users', function (error, result, fields) {
            if (error) throw error;
            console.log('The result is :', result);
        })

connection.end();
