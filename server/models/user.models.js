// user.model.js
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
    email: {
        type: String,
        required: true,
        unique: true,  
    },
    password: {
        type: String,
        reqquired: true
    },
    bloodGroup: {
        type: String,
        required: true,
    },
    // bloodGroup: {type:String,
    //              required: true},
    profilePicture: {
        type: String,
        required: true,
        default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    },
    feedback:{
        type: String,
        require:false
    },
    verified: {
        type: Boolean,
        default: false,
    }
}, {
    timestamps: true
});
 

const UserModel = model('User', UserSchema);

module.exports = UserModel;