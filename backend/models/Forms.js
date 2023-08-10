const mongoose = require('mongoose')

const formSchema = new mongoose.Schema({
    formName : {
        type:String,
        required: true,
        unique:[true,'Form name already exist'],
    },
    questions : [
        {
            question : String,
            answerType : String,
            choices : [String]
        }
    ],
    createdAt : {
        type:Date,
        required:true,
        default:Date.now()
    }
})

const Forms = mongoose.model("Forms", formSchema);
module.exports = Forms