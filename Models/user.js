const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    userID: {
        type: String,
        required: true,
    },

    Kamlik: {
        type: String,
        required: true,
    },
    belgeNo: {
        type: String,
        required: true,
    },
    egitim: {
        type: String,
        required: true,
    },
    aciklama: {
        type: String,
        required: false,
    },

});

userSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

userSchema.set('toJSON', {
    virtuals: true,
});

exports.User = mongoose.model('User', userSchema);
exports.userSchema = userSchema;