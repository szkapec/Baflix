var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
const path = require('path');
const mongoose = require('mongoose')



app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

const mongoURI = 'mongodb+srv://admin1:admin@cluster0-rqbof.mongodb.net/test?retryWrites=true&w=majority'

mongoose
  .connect(
    mongoURI,
    { useNewUrlParser: true,
      useUnifiedTopology: true,
      }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))
  
var Users = require('./routes/Users')
app.use('/users', Users)





const exercisesRouter = require('./routes/Exercises');
// const userRouter = require('./routes/users');
app.use('/exercises', exercisesRouter); 
// app.use('/users', userRouter);


// const messages = require('./routes/Messages');
// app.use('/message', messages)

// const twitters = require('./routes/Twitter');
// app.use('/twitter', twitters)


if(process.env.NODE_ENV === "production") {
  //set static folder
  app.use(express.static('client/build'));
  app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

var port = process.env.PORT || 5000


app.listen(port, function() {
  console.log('Server is running on port: ' + port)
})