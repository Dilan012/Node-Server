const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/test2',(req,res) =>{
<<<<<<< HEAD
<<<<<<< HEAD
    res.send("another endpoint")
=======
    res.send("test2 endpoint")
>>>>>>> 6ce419e (add another endpoint with get methos)
=======
    res.send("another endpoint")
>>>>>>> 1e5a64e (add another endpoint for newly created endpoint)
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})