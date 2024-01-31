// bloodRequest.models.js
const {Schema, model} = require('mongoose');
const mongoose = require('mongoose');
const User = require('../models/user.models');


const bloodRequestSchema = new Schema({
    // userBloodGroups: [{type: Schema.Types.ObjectId, ref: 'users', required: false}],
    // bankBloodGroups: [{type: Schema.Types.ObjectId, ref: 'banks', required: false}],
    hospitalID: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'hospitals',
          required: true,
    },
    emergencyDetails:{
        location:String,
        typeOfEmergency:String,
        additionalInfo:String,
    },
    bloodTypesRequired: {type:String},
    status: {  type:String, 
               enum: ['Pending', 'Approved', 'Denied', 'Completed'],
               default: 'Pending'
            },
    // units: {type:Number,  required: true},
    date: {
        type: Date,
        default: Date.now, 
        required: true,
    },
},
{timestamps:true}
)

module.exports = model('bloodRequestModel', bloodRequestSchema);