const express = require('express');
const bodyParser = require('body-parser')
const mysql = require('mysql')
const app = express()
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "",
    database: 'todo-list'
});

con.connect(function (err) {
    if (err) throw err;
})
console.log('Connected!');

const port = 5000;
const server = app.listen(port, function(req, res) {
    console.log('Listening at '+ port);
})


app.post('/add', (req, res) => {
    let data = {task: req.body.task};
    let sql = "insert into list set ?";

    con.query(sql, data, function(err, result) {
        if (err)
        {
            return console.error(err.message);
        }
        else
        {
            console.log('inserted Row(s):', result.affectedRows);
        }
    });
});

app.post('/delete', (req, res) => {

    let data = req.body.task;
    let sql = `DELETE FROM list WHERE task = ?`;

    con.query(sql, data, function(err, result) {
        if (err)
        {
            return console.error(err.message);
        }
        else
        {
            console.log('Deleted Row(s):', result.affectedRows);
        }
    });
});

app.post('/edit', (req, res) => {

    let sql = `UPDATE list set task = ? WHERE task = ? `;
    let data = [req.body.new_task, req.body.old_task];
    con.query(sql, data, function(err, result) {
        if (err)
        {
            return console.error(err.message);
        }
        else
        {
            console.log('updated Row(s):', result.affectedRows);
        }
    });
});


app.post('/show', (req, res) => {

    let i = 0;
    var a = [];
    let sql = "select * from list";
    con.query(sql, function(err, resp,) {
        if (err) 
        {

            console.log("query error in showing");
        }
        else
        {
            while(resp[i]!=null)
            {
                a.push(resp[i++].task);
            }
        }
        console.log(res.send(JSON.stringify(a)));
})
})