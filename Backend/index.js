const express = require('express');
const passport = require('passport');
const session = require('express-session');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Express session (required for passport)
app.use(session({
  secret: process.env.SESSION_SECRET || 'fallback-secret-123', // Must be set!
  resave: false,
  saveUninitialized: false,
  name: 'oauth.sid',
  cookie: {
    sameSite: 'none',       // Required for cross-site cookies
    secure: true,           // Required for SameSite=None (HTTPS only)
    httpOnly: true,         // Security: prevent JS access
    maxAge: 24 * 60 * 60 * 1000, // 24h expiry
  },
}));
app.use(passport.initialize());
app.use(passport.session());

// Serialize user into session
passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((obj, done) => {
  done(null, obj);
});

// Google OAuth strategy
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "/auth/google/callback"
}, (accessToken, refreshToken, profile, done) => {
  return done(null, profile); // You can store the user in DB here
}));

// Routes
app.get('/', (req, res) => {
  res.send('OAuth Backend Running');
});

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// app.get('/auth/google/callback',
//   passport.authenticate('google', { 
//     failureRedirect: '/',
//     session: true  }),
//   (req, res) => {
//     // ✅ Redirect to frontend with user info or token (customize as needed)
//      console.log("✅ Authentication succeeded");
//     console.log("🧠 User in session:", req.user);
//     res.redirect(process.env.FRONTEND_URL);
//   }
// );
app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    console.log("🧠 User details:", req.user);
    console.log("✅ User authenticated. Session ID:", req.sessionID);
    console.log("🍪 Cookie settings:", req.session.cookie);
    res.redirect(process.env.FRONTEND_URL);
  }
);

app.get('/auth/profile', (req, res) => {
  if (req.isAuthenticated()) {
    res.json(req.user); // ✅ returns full user object from session
  } else {
    res.status(401).json({ error: 'Not authenticated' });
  }
});


app.get('/logout', (req, res) => {
  req.logout(err => {
    if (err) {
      return res.status(500).send({ message: 'Logout failed' });
    }
    req.session.destroy(() => {
      res.clearCookie('connect.sid'); // ✅ Clears session cookie
      res.redirect(process.env.FRONTEND_URL); // Or send a 200 OK
    });
  });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`OAuth server running on port ${PORT}`);
});
