const mongoose = require('mongoose');

let demoSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        minlength:6
    },
    type: {
        type: String,
        enum: ['Apartment', 'Villa', 'House'],
        required: true
    },
    year: {
        type: Number,
        required: true,
        min:1950,
        max:2022
    },
    image: {
        type: String,
        required: true,
        validate: /^https?:\/\//i
    },
    description: {
        type: String,
        required: true
    },
    availablePieces: {
        type: Number,
        required: true
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    tenants: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'User'

        }
    ],
}, {
    timestamps: true
}
);

// housingSchema.method('getTenants', function () {
//     return this.tenants.map(x => x.name).join();
// })

const Demo = mongoose.model('Demo', demoSchema);
//TODO rename demo
module.exports = Demo;