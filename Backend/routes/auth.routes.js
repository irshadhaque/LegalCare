import express from 'express';
import passport from 'passport';
import { handleLogin, handleLogout, getProfile } from '../controllers/auth.controller.js';

const router = express.Router();

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/login',
  }),
  handleLogin // <== Using controller
);

router.get('/logout', handleLogout);
router.get('/profile', getProfile);

export default router;
