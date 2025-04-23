import express from 'express';
import { admin, login, sign } from '../controller/usercontroller.js';

    


const userrouter =express.Router()
  
userrouter.post('/login',login)
userrouter.post('/sign',sign)
userrouter.post('/admin',admin)

export default userrouter
