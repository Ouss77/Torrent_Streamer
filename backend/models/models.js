'use strict';
// Import mongoose
    const mongoose = require("mongoose");

// Declare schema and assign Schema class
    const Schema = mongoose.Schema;

// Create Schema Instance and add schema propertise
    const movies_list = new Schema({
        title: {
            type:String,
            required:true
        },
        year:{
            type:String,
        },
        url:{
            type: String,
            required: true
        },
        
        createdOn: {
            type:Date,
            default:Date.now
        }
    });

// create and export model
module.exports = mongoose.model("movies_list", movies_list);