module.exports = (order)=>{
    return {
        email:order.email,
        adress:order.adress,
        phone:order.phone,
        firstname:order.firstname,
        lastname:order.lastname,
        products:order.products,
        stock:order.stock,
    }
}