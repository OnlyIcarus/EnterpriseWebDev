import mongoose from 'mongoose'
import crypto from 'crypto'

const UserSchema = new mongoose.Schema({
  casual_workers: {
    type: Number,
    trim: true,
    required: 'Casual Workers is required'
  },
  casual_worker_pay: {
    type: Number,
    required: 'Casual Worker Pay is required'
  },
  average_casual_hours: {
    type: Number,
    required: 'Average hours is required'
  },
  standard_workers: {
    type: Number,
    trim: true,
    required: 'Standard Workers is required'
  },
  standard_worker_pay: {
    type: Number,
    required: 'Standard Worker Pay is required'
  },
  average_standard_hours: {
    type: Number,
    required: 'Average hours is required'
  },
  expert_workers: {
    type: Number,
    trim: true,
    required: 'Expert Workers is required'
  },
  expert_worker_pay: {
    type: Number,
    required: 'Expert Worker Pay is required'
  },
  average_expert_hours: {
    type: Number,
    required: 'Average hours is required'
  },
  total_physical: {
    type: Number,
    required: 'Physical item is not required'
  },

  updated: Date,
  created: {
    type: Date,
    default: Date.now
  }

        
})

const quoteModel = mongoose.model('Quotes', UserSchema);
quoteModel.createIndexes();
export default quoteModel

