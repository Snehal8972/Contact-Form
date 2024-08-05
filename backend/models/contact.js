const mongoose = require( "mongoose" );
const contact = new mongoose.Schema( {
    name: {
        type: String,
        required:true
        
    },
    number: {
        type: Number,
        required: true

    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    message: {
        type: String,
        required: true

    },
    subject: {
        type: String,
        required:true
    }
} );
module.exports = mongoose.model( "contact", contact );