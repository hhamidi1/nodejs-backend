const mongoose = require('mongoose');

const BankSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    unique: true,
    trim: true,
    maxlength: [50, 'Name cannot be more than 50 characters'],
  },
  slug: String,
  description: {
    type: String,
    required: [true, 'Please add a description'],
    maxlength: [500, 'Description cannot be more than 500 characters'],
  },
  website: {
    type: String,
    match: [
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
      'Please usea valid URL with HTTP or HTTPS',
    ],
  },
  phone: {
    type: String,
    maxlength: [20, 'Phone number can not be longer than 20 character'],
  },
  email: {
    type: String,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email',
    ],
  },
  address: {
    type: String,
    required: [true, 'Please add an address'],
  },
  //   location: {
  //     //GeoJSON Point
  //     type: {
  //       type: String,
  //       enum: ['Point'],
  //       required: true,
  //     },
  //     coordinates: {
  //       type: [Number],
  //       required: true,
  //       index: '2dsphere',
  //     },
  //     formattedAddress: String,
  //     street: String,
  //     city: String,
  //     state: String,
  //     zipcode: String,
  //     country: String,
  //   },
  services: {
    type: [String],
    required: true,
    enum: [
      'Amanah Simpanan Nasional Berhad',
      'Fixed Deposit',
      'Public Mutual',
      'Personal Loan/Financing',
      'Other',
    ],
  },
  averageRating: {
    type: Number,
    min: [1, 'Rating must be at least 1'],
    max: [10, 'Rating must not exceed 10'],
  },
  averageCustomerWaiting: Number,
  photo: {
    type: String,
    default: 'no-photo.jpg',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Banks', BankSchema);
