const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 9000

app.use(express.static('dist'))

app.get('/version', (req, res) => {
  res.send('1')
})

app.get('/health', (req, res) => {

  res.status(200).send('OK')
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})
