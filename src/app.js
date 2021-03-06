const fs = require('fs');
const path = require('path');

const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

const accountData = fs.readFileSync("src/json/accounts.json", { encoding: 'UTF8' });
const accounts = JSON.parse(accountData);

const userData = fs.readFileSync("src/json/users.json", { encoding: 'UTF8' });
const users = JSON.parse(userData);

app.get('/', function (req, res) {
    res.render('index', { title: 'Account Summary', accounts: accounts });
});

app.get('/savings', function (req, res) {
    res.render('account', { account: accounts.savings });
});

app.get('/checking', function (req, res) {
    res.render('account', { account: accounts.checking });
});

app.get('/credit', function (req, res) {
    res.render('account', { account: accounts.credit });
});

app.get('/profile', function (req,res) {
    res.render('profile', { user: users[0] })
})

app.listen(3000, function () {
    console.log('PS Project Running on port 3000!');
});