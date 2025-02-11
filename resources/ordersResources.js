module.exports = (order)=>{
    return {
        email:order.email,
        adress:order.adress,
        phone:order.phone,
        name:order.name,
        products:order.products
    }
}