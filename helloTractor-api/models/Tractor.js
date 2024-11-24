import { Schema, model as _model } from 'mongoose';

const tractorSchema = new Schema({
  tractorName: String,
  model: String,
  year: Number,
  images: { type: [String], required: true },
  dealer: { type: Schema.Types.ObjectId, ref: 'Dealer' }, //same as brand or make
  isApproved: { type: Boolean, default: false },
  HPCategory: Number,
  cost: Number,
  tractorType: { type: String, enum: ['Utility Tractors', 'Row-Crop Tractors', 'Compact Tractors', 'Sub-Compact Tractors', 'High-Horsepower Tractors'] },
  engineHoursUsed: Number,
  vehicleID: Number,
  engineCapacity: Number,
  fuelType: String,
  engineConditions: String,
  engineConsumption: Number,
  tyreConditions: String,
  viewCount: { type: Number, default: 0 },
  exteriorFeatures: { type: [String], required: true },
  interiorFeatures: { type: [String], required: true },
  price: Number,
});

export default _model('Tractor', tractorSchema);