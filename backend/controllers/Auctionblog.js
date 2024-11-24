
const Blog = require('../Model/Blogmodel');

const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: 'dey00rpfm',
    api_key: '518173233826673',
    api_secret: 'BGhkhWTohNnwd_XWJrRcYBBUV0c',
    secure: true,
});
const createBlog = async (req, res) => {
    const { title, description, image, comment } = req.body;

    try {

        const result = await cloudinary.uploader.upload(image, {
            folder: 'blog',  // Specify the folder name
        });
        console.log(result);
        const blog = new Blog({ title, description, image, comment });
        await blog.save();
        res.status(201).json({ message: 'Blog created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error creating blog' });
    }
};
const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching blogs' });
    }
};
const getsingleblog = async (req, res) => {
    const { id } = req.params;
    try {
        const blog = await Blog.findById(id);
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching blog' });
    }
};
module.exports = {
    createBlog,
    getBlogs,
    getsingleblog
};