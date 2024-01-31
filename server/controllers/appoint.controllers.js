// schedule.controller.js
const nodeSchedule = require('node-schedule');
const emailing = require('../middleWares/emailing');
const  UserModel  = require('../models/user.models');
const  Hospital = require('../models/Hospital')
const  Appointment = require('../models/appointment.models')
const nodemailer = require('nodemailer');
require('dotenv').config();



const sendAppointmentReminder = async (req, res, next) => {
    const { userId, date, hospitalId } = req.body;
    
    try {
        const user = await UserModel.findOne({_id:userId});
        console.log(user)
        const hospital = await Hospital.findOne({_id:hospitalId});
        console.log(hospital);
        if (!user || !hospital) {
            console.error('User or hospital not found.');
            return;
        }
        

        if (!user.email || !user.fullName || !hospital.email || !hospital.name) {
            console.error('User or hospital object is missing expected properties.');
            return;
        }

        const appointmentData = {
            userId: user._id,
            hospitalId: hospital._id,
            date: new Date(date),
        };

        const appointment = new Appointment(appointmentData);
        await appointment.save();

        const mailOptions = {
            from: process.env.EMAIL,
            to: user.email,
            subject: 'Appointment Reminder',
            text: `Hi ${user.fullName},\nYour appointment is scheduled for ${date} at ${hospital.hospitalName}.`,
        };

        // Replace the sendMail call with the sendEmail middleware
        const info = await emailing(mailOptions.to, mailOptions.text, mailOptions.subject);
        console.log('Appointment reminder sent successfully:', info);
        res.status(200).json({ message: 'Appointment reminder sent successfully.' });
    } catch (error) {
        console.error('Error sending appointment reminder:', error);
        res.status(500).json({ message: 'Appointment reminder not sent'});
    }
};

module.exports = sendAppointmentReminder ;
