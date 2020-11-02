const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const subjectSchema = new Schema({
    _id:false,
    subject_name:{
        type:String,
        required:true
    }
})


const studentSchema = new Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    mobile:{
        type: Number,
    },
    course:{
        type:String,
    },
    branch:{
        type: String,
    },
    std_no:{
        type: Number,
        unique: true
    },
    dob:{
        type:Date,
    },
    gender:{
        type:String,
    },
    year:{
        type:Number,
    },
    semester:{
        type:Number,
    },    
    core_subjects:[subjectSchema],
    optional_subjects:[subjectSchema],
    address:{
        type:String,
    },
    city:{
        type:String,
    },    
    fatherName:{
        type:String,
    },
    motherName:{
        type:String,
    },
    fatherOccupation:{
        type:String,
    },
    motherOccupation:{
        type:String,
    },
    hostler:{
        type:String,       
    },
    feeStatus:{
        type:String,
        default: 'Not Paid'
    },
    image:{
        type:String
    }
}, {
    timestamps:true
})

var Students = mongoose.model('Students',studentSchema,'studentList');
module.exports= Students;