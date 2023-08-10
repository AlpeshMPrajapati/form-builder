const mongoose = require('mongoose')

const dbConnect = ()=>{
    mongoose.connect('mongodb://localhost:27017/dynamicForm',{
        useNewUrlParser : true,
        useUnifiedTopology :true
    })
    .then(()=>console.log("Database Connected"))
    .catch((err)=> console.error(err))
}

module.exports =dbConnect;