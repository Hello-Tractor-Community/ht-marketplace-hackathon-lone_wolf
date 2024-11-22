import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String },
  googleId: { type: String },
  facebookId: { type: String },
  images: {type:[String], required: true},
  twoFactorCode: { type: String, required: true },
  isVerified: { type: Boolean, default: false },
  user: { type: String, required: true,enum: ['buyer','seller','admin']},
  isAdmin: {
    type: Boolean,
    required: false,
    default: false,
  },
  location: {
    type: { type: String, default: 'Point' },
    coordinates: [Number],
  },
  phoneNumber: { type: String, required: true },
});

userSchema.index({ location: '2dsphere'});

export default model('User', userSchema);