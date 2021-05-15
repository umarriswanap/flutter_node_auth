const express=require('express')
const morgan=require('morgan')
const cors=require('cors')
const connectdb=require('./config/db')
const passport=require('passport')
const bodyparser=require('body-parser')

connectdb()
const app=express()
if(process.env.NODE_ENV==='production'){
   app.use(morgan('dev'))
}
const routes=require('./routers/index')
const PORT = process.env.PORT || 3000
app.use(cors())
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())
app.use(routes)
app.use(passport.initialize())
require('./config/passport')(passport)


app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))