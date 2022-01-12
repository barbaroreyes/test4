const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    product: {
        type: String,
        require:[true, 'Please name product'],
        trim: true,
    },
    categoria :{
        type:String,
        require:true,
        maxLength:[200,'please real product']
    },
    price:Number,
    image: String,
    description:String,

})
module.exports = mongoose.models.Product||mongoose.model('Product',ProductSchema)