module.exports=(schema)=> async (req,res,next)=>{
    try{
        await schema.validateAsync(req.body,{
            abortEarly:false,
            errors:{
                wrap:{
                    label:''
                }
            }
        })
        next();
    }catch(error){
        res.status(422).json({error:e.details.map(error => error.message)})
    }
}