const Weaklyoffer = require('../Model/weaklyoffer');
const getweaklyoffer = async (req, res) => {
    try {
        const weakoffer = await Weaklyoffer.find();
        res.status(200).json(weakoffer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const postweaklyoffer = async (req, res) => {
    try {
        const weakoffer = await Weaklyoffer.create(req.body);
        res.status(200).json(weakoffer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const getsingleweaklyoffer = async (req, res) => {
    try {
        const weakoffer = await Weaklyoffer.findById(req.params.id);
        res.status(200).json(weakoffer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getweaklyoffer,
    postweaklyoffer,
    getsingleweaklyoffer
};