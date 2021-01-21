// Require express and body-parser
const express = require("express")
const bodyParser = require("body-parser")

// Initialize express and define a port
const app = express()
const PORT = 8080

// Tell express to use body-parser's JSON parsing
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello!'))

//Set up a route for the webhook
app.post("/hook/", (req, res) => {
  console.log(req.body) // Call your action on the request here
  res.status(200).end() // Responding is important
})

// Start express on the defined port
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))

