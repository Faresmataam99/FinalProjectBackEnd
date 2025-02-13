module.exports=(user)=>{
    return{
        id:user._id,
        firstname: user.firstname,
        lastname:user.lastname,
        birthdate:user.birthdate,
        country:user.country,
        email:user.email,
        password:user.password,
        type:user.type
    }
}