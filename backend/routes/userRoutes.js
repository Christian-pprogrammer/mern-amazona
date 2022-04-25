import bcrypt from 'bcrypt';
import User from '../models/userModel.js';

import express from 'express';
const userRouter = express.Router();
userRouter.post('/signin', async (req,res)=>{
  const user = await User.findOne({email: req.body.email});
  if(user) {
    if(bcrypt.compareSync(req.body.password, user.password)){
      res.send({
        ...user,
        token: generateToken(user)
      })
      return;
    }
  }
  res.status(401).send({message: 'Invalid email or password'});
})

export default userRouter;