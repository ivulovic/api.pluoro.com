const express = require('express')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express()

app.use(bodyParser.json());
app.use(cookieParser());

const port = 5001;

app.get('/api/t0', (req, res) => {
  res.cookie('TestAuthorizationNormal', 'TestAuthorizationNormalVALUE', { maxAge: 900000, expires: new Date(Date.now() + 9999999), path: "/", httpOnly: false, secure: false, });
  res.cookie('TestAuthorizationSecure', 'TestAuthorizationSecureVALUE', { maxAge: 900000, expires: new Date(Date.now() + 9999999), path: "/", httpOnly: true, secure: true });
  res.status(200).json({ user: 'Ivan', token: 'token' });
})

app.get('/api/t1', (req, res) => {
  res.cookie('TestAuthorizationNormal2', 'TestAuthorizationNormalVALUE2', { maxAge: 900000, expires: new Date(Date.now() + 9999999), path: "/", httpOnly: false, secure: false, });
  res.cookie('TestAuthorizationSecure2', 'TestAuthorizationSecureVALUE2', { maxAge: 900000, expires: new Date(Date.now() + 9999999), path: "/", httpOnly: true, secure: true });
  res.status(200).json({
    id: 1,
    name: "Asia",
    population: "4,624,520,000",
    no_of_countries: 50,
    area: "44,579,000"
  });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
