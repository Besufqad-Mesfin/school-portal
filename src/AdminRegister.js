const express = require('express');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const router = express.Router();
const admins = [];

let nextId = 1;

router.post('/register', async (req, res) => {
    const { firstName, lastName, email, role, department, password } = req.body;

    if (!firstName || !lastName || !email || !role || !department) {
        return res.status(400).json({ message: 'Please fill in all required fields (firstName, lastName, email, role, department).' });
    }

    const existingAdmin = admins.find(admin => admin.email === email);
    if (existingAdmin) {
        return res.status(409).json({ message: 'Email already exists. Please choose a different email.' });
    }

    try {
        const generatedPassword = password || crypto.randomBytes(8).toString('hex');
        const hashedPassword = await bcrypt.hash(generatedPassword, 10);

        const newAdmin = {
            id: nextId++,
            firstName: firstName,
            lastName: lastName,
            email: email,
            role: role,
            department: department,
            password: hashedPassword
        };

        admins.push(newAdmin);
        res.status(201).json({
            message: 'Admin registered successfully! Password has been generated.',
            adminId: newAdmin.id,
            username: `${firstName} ${lastName}`,
            email: newAdmin.email,
            generatedPassword
        });
    } catch (err) {
        console.error('Error registering admin:', err);
        res.status(500).json({ message: 'Error registering admin. Please try again later.' });
    }
});

module.exports = router;