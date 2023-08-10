const Forms = require('../models/Forms')
const slugify = require('slugify');
const url = require('url')



exports.createForm = async(req,res)=>{
    try {
        const {formName} = req.body;
        const form = await Forms.create({formName : formName});
        return res.json({
            success : true,
            data :form,
        })

    } catch (error) {
        return res.status(500).json({
            success : false,
            message: error.message
        })
    }
}


exports.getForms = async (req,res)=>{
    try {
        let forms=await Forms.find();
        if(!forms){
            throw new Error('No Forms Found');
        }
        else{
            return res.json({
                success : true,
                forms : forms
            })
        }
        


    } catch (error) {
        return res.status(500).json({
            success : false,
            message: error.message
        })
    }
}


exports.deleteForm = async (req,res)=>{
    try {
        const {id} = req.params;
        const form = await Forms.findByIdAndDelete(id);

        res.json({
            success:true,
            form : form
        })
        
    } catch (error) {
        return res.status(500).json({
            success : false,
            message: error.message
        })
    }
}


exports.getFormById = async (req,res)=>{
    try {
        const {id} = req.params;
        const form = await Forms.findById({_id : id});
        if(form){
            return res.json({
                success: true,
                data:form
            })
        }
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}