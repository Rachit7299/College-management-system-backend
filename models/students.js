const { TooManyRequests } = require('http-errors');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const addressSchema = new Schema({
    house_no:{
        type:String,
        required: true
    },
    area:{
        type:String,
        required: true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    pincode:{
        type:Number,
        required:true
    }
})

const courseSchema = new Schema({
    semester:{
        type:Number,
        required:true
    },
    course_name:{
        type:String,
        required:true
    },
    year:{
        type:String,
        required:true
    },
    roll_no:{
        type: Number,
        required:true
    },
    branch:{
        type: String,
        required:true
    },
    section:{
        type: Number,
        required: true
    }
})

const studentSchema = new Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    mobile:{
        type: Number,
        required: true,
        unique: true
    },
    privilege:{
        type: Number,
        required: true
    },
    dept:{
        type: String,
        required: true
    },
    std_no:{
        type: Number,
        required: true
    },
    address:[addressSchema],
    course:[courseSchema]

}, {
    timestamps:true
})

var Users = mongoose.model('Students',studentSchema,'studentList');
module.exports= Users;