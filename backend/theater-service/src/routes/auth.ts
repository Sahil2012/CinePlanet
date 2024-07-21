import { Router } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { findUserByUsername, addUser } from '../userModel';

dotenv.config();

const router = Router();

// sign-in route
router.post('/signin', async (req, res) => {
  const { username, password } = req.body;

  const user = findUserByUsername(username);
  if (!user) {
    return res.status(401).json({ message: 'Invalid username' });
  }

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.status(401).json({ message: 'Invalid password' });
  }

  const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
  res.json({ token });
});

// sign-up route
router.post('/signup', async (req, res) => {
  const { username, password } = req.body;

  const existingUser = findUserByUsername(username);
  if (existingUser) {
    return res.status(409).json({ message: 'Username already taken' });
  }

  const newUser = await addUser(username, password);
  res.status(201).json({ id: newUser.id, username: newUser.username });
});

export default router;
