const mongoose = require('mongoose');

// Define the schema
const gemstoneSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: [String], // Array of strings
        required: true,
    },
    bidprice: {
        type: String,
        required: true,
    },
    category: { // New field
        type: String,
        required: true,
    },
    subcategory: { // New field
        type: String,
        required: true,
    },
    color:{
      type:String,
      required:true
    },
    rarity: { // New field for rarity of gemstone
        type: String,
        enum: ['common', 'rare', 'very rare'],
    },
    origin: { // New field for gemstone origin
        type: String,
    },
    carat: { // New field for weight
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ['trending', 'popular', 'upcoming', 'live'], // Allowed values
        required: true,
    },
    targetDate: { // Add this field if comparing with a specific date
        type: Date,
    },
    timeDifference: {
        type: String, // Store the time difference as a formatted string
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Pre-save hook to calculate time difference
gemstoneSchema.pre('save', function(next) {
    if (this.targetDate) { // Ensure targetDate exists
        const now = new Date();
        const target = new Date(this.targetDate);
        
        const differenceInMilliseconds = target - now; // Difference in milliseconds
        const differenceInHours = Math.floor(differenceInMilliseconds / (1000 * 60 * 60));
        
        this.timeDifference = `${differenceInHours} hours`;
    }
    
    next(); // Proceed with saving the document
});

// Create and export the model
const Gemstone = mongoose.model('Gemstone', gemstoneSchema);
module.exports = Gemstone;
