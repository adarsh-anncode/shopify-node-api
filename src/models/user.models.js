import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    address1: String,
    city: String,
    province: String,
    phone: String,
    zip: String,
    last_name: String,
    first_name: String,
    country: String
});

const userSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    first_name:{
        type: String,
        required: true,
    },
    last_name: { 
        type: String, 
        required: true 
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    addresses:{
        type: [addressSchema]
    }
}, {timestamps: true})

const User = mongoose.model('User', userSchema)

export default User