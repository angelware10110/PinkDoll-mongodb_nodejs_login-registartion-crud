require('dotenv').config()

const express = require('express')
const cors = require('cors')
const port = process.env.PORT || 27017

connectDB()

const app = express()
app.use(cors())

app.options('*', cors())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(errorHandler)

// turi likti paskutinis, kad pirmiausia viskas užsikrautų ir tik tada paleistų serverį
app.listen(port, () => console.log(`Server started on port ${port}`))