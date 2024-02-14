
const express = require('express');
const authRoute = require('./auth.routes');
const hospitalRoute = require('./hospitalRoutes');
const bloodReqRoute = require('./bldreq.routes')
const appointRoute = require('./appointment.routes');
const userRoute = require('./user.routes');
const adminRouter = require('./adminRoutes');
const allRoutes = express.Router();


allRoutes.use('/auth', authRoute);
allRoutes.use('/request-blood', bloodReqRoute);
allRoutes.use('/bldreq', bloodReqRoute);
allRoutes.use('/hospital', hospitalRoute);
allRoutes.use('/donate', userRoute);
allRoutes.use('/users', userRoute);
allRoutes.use('/appointment', appointRoute);
allRoutes.use('/admin', adminRouter)








module.exports = allRoutes;

