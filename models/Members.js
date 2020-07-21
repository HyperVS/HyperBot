const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MemberSchema = new Schema({
    id: {
        type: String, required: true
    },
    name: {
        type: String, required:true
    },
    msgs: {
        type: Number
    }
});

let Member = mongoose.model("Member", MemberSchema);

module.exports = Member;