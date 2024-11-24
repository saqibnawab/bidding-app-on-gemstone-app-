
const heroimage = require('../Model/Heroimagemodel');
const cloudinary = require('cloudinary').v2


cloudinary.config({
    cloud_name: 'dey00rpfm',
    api_key: '518173233826673',
    api_secret: 'BGhkhWTohNnwd_XWJrRcYBBUV0c',
    secure: true,
});


const getAllHeroimage = async (req, res) => {
    try {
        const heroimages = await heroimage.find();
        res.status(200).json(heroimages);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const createHeroimage = async (req, res) => {
    try {
        const { images } = req.body;
        if (!images || images.length === 0) {
            return res.status(400).json({ message: 'No images provided.' });
        }
        const uploadpromises = images.map(image => cloudinary.uploader.upload(image, {
            folder: 'heroimages',
        }));
        const uploadResults = await Promise.all(uploadpromises);
        const imageUrls = uploadResults.map(result => result.secure_url);
        const newHeroimage = new heroimage({ images: imageUrls });
        const savedHeroimage = await newHeroimage.save();
        res.status(201).json(savedHeroimage);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
module.exports = {
    getAllHeroimage,
    createHeroimage,
};