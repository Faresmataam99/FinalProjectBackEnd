module.exports=(req,res,err,next)=>{
    console.log(err)
    res.status(500).json({message:"server error"})
}
