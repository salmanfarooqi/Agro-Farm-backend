// contactController.js
const Contact = require('../models/contact.js');

const contactController = {
  async submitContactForm(req, res) {
    try {
      // Create a new contact instance
      const newContact = new Contact({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        message: req.body.message
      });

      // Save the contact to the database
      await newContact.save();

      res.status(201).json({ message: 'Contact form submitted successfully' });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      res.status(500).json({ message:error });
    }
  }
};

module.exports = contactController;
