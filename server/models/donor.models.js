const { Schema, model } = require('mongoose');


const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

const UserSchema = new Schema({
    fullName: { 
        type: String, 
        required: true 
    },
    
    mobileNumber: { 
        type: String, 
        required: false
    },
    nationalID:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,  
    },
    city: { type: String, required: true}, 

    province: { type: String, required: true},

    district: {type: String, required: true},

    bloodGroup: {
        type: String,
        required: false,
        // enum: bloodGroups
    },

    age:{
        type: Number,
        required: false
    },
    profilePicture: {
        type: String,
        required: true,
        // default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    },
    gender:{
        type: String,
        required: false,
        enum: ['Male', 'Female', 'Other']
    },

    // feedback:{
    //     type: String,
    //     require:false
    // },
    donationAvailability:{ 
        type: Date, required: false, default:null
    }
}, {
    timestamps: true
});
 

const Donation = model('User', UserSchema);

module.exports = Donation;