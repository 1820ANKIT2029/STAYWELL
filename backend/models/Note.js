const Mongoose = require("mongoose");

const noteSchema = new Mongoose.Schema({
    user: {
        type: Mongoose.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    password: {
        type: String,
        required: true
    },
    roles: [{
        type: String,
        default: "Employee"
    }],
    active: {
        type: Boolean,
        default: true
    }
});


module.exports = Mongoose.model('Note', userSchema);