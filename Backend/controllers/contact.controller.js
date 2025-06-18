export const submitContactForm = (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  // Handle form (log or save to DB/send mail)
  console.log('📬 Contact Form:', { name, email, message });

  res.status(200).json({ success: true, message: 'Message received.' });
};
