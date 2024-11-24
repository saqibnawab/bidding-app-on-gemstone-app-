const Gemstone = require('../Model/Gemstonemodel');

const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: 'dey00rpfm',
    api_key: '518173233826673',
    api_secret: 'BGhkhWTohNnwd_XWJrRcYBBUV0c',
    secure: true,
});
const getallgemstones = async (req, res) => {
    try {
        const gemstones = await Gemstone.find();
        res.json(gemstones);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
const getgemstonebyid = async (req, res) => {
    try {
        const gemstoneId = req.params.id;
        const gemstone = await Gemstone.findById(gemstoneId);
        if (!gemstone) {
            return res.status(404).json({ error: 'Gemstone not found' });
        }
        res.json(gemstone);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
const creategemstone = async (req, res) => {
    const { name, description, image, bidprice, subcategory, category, status, targetDate, color, rarity, origin, carat } = req.body;
    console.log(name, description, image, bidprice, status, targetDate, subcategory, category, rarity, origin, carat, color);
    try {

        // upload  multiple image to cloudinary
        const uploadpromises = image.map(async (image) => {
            const result = await cloudinary.uploader.upload(image, {
                folder: 'gemstone',
            });
            return result.secure_url;
        });
        const uploadedImages = await Promise.all(uploadpromises);
        console.log(uploadedImages);
        // create ghemstone
        const gemstone = new Gemstone({
            name,
            description,
            image: uploadedImages,
            bidprice,
            status,
            targetDate,
            subcategory,
            category,
            color,
            rarity,
            origin,
            carat
        })
        await gemstone.save();
        res.status(201).json({ message: 'Gemstone created successfully', gemstone });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
        console.log(error);
    }


}
const findbycategory = async (req, res) => {
    const category = req.params.category;
    console.log(category);

    try {

        const gemstones = await Gemstone.find({ category: category });
        if (!gemstones) {
            return res.status(404).json({ error: 'Gemstones not found' });
        }
        res.status(200).json(gemstones);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
        console.error(error);
    }
};

const findbystatus = async (req, res) => {
    const status = req.params.status;
    console.log(status);
    try {
        const findbystatus = await Gemstone.find({ status: status })
        if (!findbystatus) {
            return res.status(404).json({ error: 'Gemstones not found' });
        }
        res.status(200).json(findbystatus);
        console.log(findbystatus)
    } catch (error) {
        console.log(error)
    }

}


const filtergemstones = async (req, res) => {
    try {
        console.log("yes");
        const { subcategory, status, bidprice } = req.query;
        console.log(subcategory, status, bidprice);

        const query = {};
        console.log(query);
        if (subcategory) {

            query.subcategory = { $in: subcategory.split(',') };
        }

        if (status) {

            query.status = { $in: status.split(',') };
        }

        //   Example for price sorting
        //      bidprice = {};
        //   if (bidprice === 'Lowtohigh') {

        //     sort.bidprice = 1; // Ascending order
        //   } else if (bidprice === 'HightoLow') {
        //     sort.bidprice = -1; // Descending order
        //   }

        const gemstones = await Gemstone.find(query)
        res.json(gemstones);
        console.log(gemstones);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching gemstones' });
        console.error(error);
    }
};



module.exports = {
    getallgemstones,
    getgemstonebyid,
    creategemstone,
    findbycategory,
    findbystatus,
    filtergemstones
}