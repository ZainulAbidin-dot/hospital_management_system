const express = require('express')
const AuthController = require('../controllers/authController')
const router = express.Router()

// doctor login specic routes for specific functionss
router.post('/doctor-login', AuthController.doctorLogin);
// patient login
router.post('/patient-login', AuthController.patientLogin);
// admin login
router.post('/admin-login', AuthController.adminLogin);


module.exports = router