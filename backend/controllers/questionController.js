const Forms = require('../models/Forms')


exports.addQuestion = async (req,res)=>{
    try {
        const {id} = req.params;
        const {question,answerType,choices} = req.body;        
        if(!question ||!answerType){
            throw new Error('Please provide question and answer type');
        }
        // let form = await Forms.findByIdAndUpdate(id,{ $push:{ questions:[
        //     {_id:'',questionName:question,_type:answerType,...(answerType=='multiplechoice'?{options: choices}:{})}]}});

        const form = await Forms.findById(id);
        if(!form){
            throw new Error('Form Not Found')
        }
        const que ={
            question,
            answerType,
            choices : answerType ==='Multichoice' || answerType === 'singleSelect' ? choices.split('\n') : []
        }

        form.questions.push(que);
        await form.save();

        return res.json({
            success :true,
            data : form
        })

    } catch (error) {
        return res.status(500).json({
            success : false,
            message: error.message
        })
    }
}