var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var express = require('express');
var Courses = require('../models/course');
const config = require('../config');
const courseRouter = express.Router();
courseRouter.use(bodyParser.json());

courseRouter.route('/get-all').get((req,res,next)=>{
    Courses.find({})
    .then((fee)=>{
        res.status(200).json(fee);
    },(err)=>next(err))
    .catch((err)=>next(err))
})

courseRouter.route('/get-courses').get((req,res,next)=>{
    Courses.find({})
    .then((fee)=>{
        let l= fee.length;
        let i=0;
        name=[];
        for(i=0;i<l;i++){
            name[i]=fee[i].name;
        }
        res.status(200).json(name);
    },(err)=>next(err))
    .catch((err)=>next(err))
})

courseRouter.route('/get-years').get((req,res,next)=>{
    Courses.find({name:req.query.name})
    .then((course)=>{
        if(course!=null){
            res.status(200).json(course.duration);
        }
        else{
            err = new Error('Course ' + req.params.Id + ' not found');
            err.status = 404;
            return next(err);
          }
    }, (err) => next(err))
    .catch((err) => next(err)
    );
})

courseRouter.route('/create').post((req,res,next)=>{
    Courses.findOne({code:req.body.code})
    .then((course)=>{
        if(course!=null){
            res.status(405).send('Course already exists!')
        }
        else{
            Courses.create({
                code: req.body.code,
                name: req.body.name,
                duration: req.body.duration,
                semesters: req.body.semesters,
            }).then((course)=>{
                res.status(200).json(course);
            },(err)=>next(err))
        }
    },(err)=>next(err))
    .catch((err)=>next(err))
})

courseRouter.route('/add-subject/:id').post((req,res,next)=>{
    Courses.findOne({_id:req.params.id})
    .then((course)=>{
        if(course!=null){
            course.subjects.push(req.body);
            course.save()
            .then((user)=>{
                res.status(200).json(user);
              },(err)=>next(err));
        }
        else{
            err = new Error('Course ' + req.params.Id + ' not found');
            err.status = 404;
            return next(err);
          }
    }, (err) => next(err))
    .catch((err) => next(err)
    );
})

courseRouter.route('/get-subjects/:id').get((req,res,next)=>{
    Courses.findOne({_id:req.params.id})
    .then((course)=>{
        if(course!=null){
            res.status(200).json(course.subjects);
        }
        else{
            err = new Error('Course ' + req.params.Id + ' not found');
            err.status = 404;
            return next(err);
          }
    }, (err) => next(err))
    .catch((err) => next(err))
})

courseRouter.route('/delete-course/:id').delete((req,res,next)=>{
    Courses.deleteOne({_id:req.params.id})
    .then((cr)=>{
        res.status(200).send('Deletion Successfull!');
    }, (err) => next(err))
    .catch((err) => next(err))
})

courseRouter.route('/del-subject/:id&:c_id').delete((req,res,next)=>{
    Courses.findOne({_id:req.params.id})
    .then((course)=>{
        if(course!=null){
            course.subjects.pull({_id:req.params.c_id});
            course.save()
            .then((user)=>{
                res.status(200).json(user);
              },(err)=>next(err));
        }
        else{
            err = new Error('Course ' + req.params.Id + ' not found');
            err.status = 404;
            return next(err);
          }
    }, (err) => next(err))
    .catch((err) => next(err)
    );
})


module.exports= courseRouter;