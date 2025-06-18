export const handleLogin = (req, res) => {
  // Google login is handled by Passport
  res.redirect(process.env.FRONTEND_URL); // After success
};

export const handleLogout = (req, res) => {
  req.logout(() => {
    res.redirect(process.env.FRONTEND_URL); // Go back to homepage after logout
  });
};

export const getProfile = (req, res) => {
  if (req.isAuthenticated()) {
    res.status(200).json(req.user);
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
};
