const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const StreamerSchema = new Schema({
    name: {
        type:String, required:true
    },
    link: {
        type:String, required:true
    }
});

let Streamer = mongoose.model("Streamer", StreamerSchema);

module.exports = Streamer;