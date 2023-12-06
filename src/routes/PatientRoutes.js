require('dotenv').config();
const express = require('express')
const UserController = require('../controllers/userController')
const AppointmentController = require('../controllers/appointmentController')
const router = express.Router()
const jwt = require('jsonwebtoken')

// specific routes for specific
router.post('/create-patient', UserController.createPatient);




//mapping of specific routes for specific functions
router.get('/all-doctors', UserController.getAllDoctors);
// get specific doctors
router.post('/get-specific-doctors', UserController.getSpecificDoctors);
// get nearby doctor
router.post('/get-nearby-doctors', UserController.getNearbyDoctors);
// create appointment
router.post('/create-appointment', AppointmentController.createAppointment);
// get all appointments for patients
router.post('/get-all-appointments', AppointmentController.getAllAppointments);

module.exports = router