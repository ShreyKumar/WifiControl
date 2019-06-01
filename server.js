const express = require("express")
const bodyParser = require("body-parser")

const app = express()
const port = process.env.port || 5000

const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/api/hello", (req, res) => {
    res.send({
        test: "Hello"
    })
})

app.post("/check/in", (req, res) => {
    stripe.customers.create({
        description: 'Customer for jenny.rosen@example.com',
        source: "tok_visa" // obtained with Stripe.js
    }, (err, customer) => {
        console.log(customer)
    });
})

app.post("/check/out", (req, res) => {
    
})

app.listen(port, () => console.log("Listening on port " + port))