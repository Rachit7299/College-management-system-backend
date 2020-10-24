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

const personelSchema = new Schema({
    father_name:{
        type:String,
        required:true
    },
    mother_name:{
        type: String,
        required: true
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required: true
    },
    hostel:{
        type:String,
        required:true
    }
})

const feeSchema = new Schema({
    tutionfee:{
        type: Number,
        required: true
    },
    bookfees:{
        type: Number,
        required: true
    },
    hostelfee:{
        type: Number,
        required:true       
    },
    totalfee:{
        type: Number,
        required: true
    },
    paid:{
        type: String,
        required: true
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
        type:Number,
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
    course:[courseSchema],
    personel:[personelSchema],
    fees:[feeSchema]

}, {
    timestamps:true
})

var Students = mongoose.model('Students',studentSchema,'studentList');
module.exports= Students;