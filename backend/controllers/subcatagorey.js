


// controllers/subcategory.js
const cloudinary = require('cloudinary').v2;
const Subcategory = require('../Model/subcatagoreymodel');

cloudinary.config({
    cloud_name: 'dey00rpfm',
    api_key: '518173233826673',
    api_secret: 'BGhkhWTohNnwd_XWJrRcYBBUV0c',
    secure: true,
});


const getAllSubcategory = async (req, res) => {
    try {
        const subcategories = await Subcategory.find();
        res.status(200).json(subcategories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createSubcategory = async (req, res) => {
    try {

        const { name, items, image } = req.body; // Destructure image URL from body

        if (!image) {
            return res.status(400).json({ message: 'Missing required parameter - image' });
        }
        const existingSubcategory = await Subcategory.findOne({ name });
        if (existingSubcategory) {
            return res.status(400).json({ message: 'Subcategory with this name already exists' });
        }

        // Upload image URL to Cloudinary
        const result = await cloudinary.uploader.upload(image, {
            folder: 'subcategories',
        });

        // Create new subcategory
        const subcategory = new Subcategory({
            name,
            items,
            image: result.secure_url,
        });

        // Save subcategory
        await subcategory.save();

        res.status(201).json({ message: 'Subcategory created successfully', subcategory });
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error);
    }
};


module.exports = {
    getAllSubcategory,
    createSubcategory,
};

