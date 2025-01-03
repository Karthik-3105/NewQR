const mongoose = require('mongoose')
import {StudentsSchema} from '../db.js'

const StudentsSchema = new mongoose.Schema({
    name:{type: String, required: true},
    email:{type: String, required: true},
    contact:{type: Number, required: true, unique: true},
    password:{type: String, required: true,},

})



const StudentsModel = mongoose.model('Students', StudentsSchema)
module.exports = StudentsModel;