const User = require('../Model/Usermodel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const getusers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const createUser = async (req, res) => {
    const { name, email, password, Address } = req.body;
    try {
        const hashpassword = await bcrypt.hash(password, 10)
        const user = new User({
            name,
            email,
            password: hashpassword,
            Address,
        });
        await user.save();
        return res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
        console.log(error);
    }
};
const login = async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password)
    try {
          const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }


        const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });
        return res.status(200).json({ message: 'Login successful', user , token });
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getusers,
    createUser,
    login
};
