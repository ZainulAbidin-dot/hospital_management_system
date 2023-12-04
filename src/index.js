const cors = require('cors')
require('express-async-errors');
const express = require('express');
const app = express();
const port = 3000;
const PatientRoutes = require("./routes/PatientRoutes");
const DoctorRoutes = require("./routes/DoctorRoutes");
const AppointmentRoutes = require("./routes/AppointmentRoutes");
const AuthRoutes = require("./routes/AuthRoutes");
const AdminRoutes = require("./routes/AdminRoutes");

const whitelist = ['http://localhost:5500', 'http://127.0.0.1:5500']

const corsOptions = {
    origin: function (origin, callback) {
        console.log(origin)
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            console.log("Allowed by CORS")
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

app.use(cors(corsOptions));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/patient', PatientRoutes);
app.use('/doctor', DoctorRoutes);
app.use('/auth', AuthRoutes);
app.use('/admin', AdminRoutes);

app.use('*', (req, res) => {
    res.status(404).json({
        message: 'Not Found'
    });
})

app.use((error, request, response, next) => {
    response.status(error.status || 500);
    return response.json({
        error: {
            message: error.message
        }
    });
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
