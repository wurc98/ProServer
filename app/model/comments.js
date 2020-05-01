'use strict';

module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const commentsSchema = new Schema({
        name: {
            type: String
        },
        img: {
            type: String
        },
        username: {
            type: String
        },
        content: {
            type: String
        },
        praise: {
            type: String
        },
        likename: {
            type: Array
        },
        dislikename: {
            type: Array
        },
        reply: {
            type: Array
        },
        data: {
            type: Date,
            default: Date.now
        }
    });
    return mongoose.model('comments', commentsSchema);
};
