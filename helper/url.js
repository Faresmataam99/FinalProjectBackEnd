exports.generateUrl = (path)=>{
    return `${process.env.APP_PROTOCOL}://${process.env.APP_HOST}:${process.env.APP_PORT}/${path}`
}