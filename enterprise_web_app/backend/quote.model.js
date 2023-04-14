import mongoose from 'mongoose'
import crypto from 'crypto'

const UserSchema = new mongoose.Schema({
  casual_workers: {
    type: String,
    trim: true,
    required: 'Casual Workers is required'
  },
  casual_worker_pay: {
    type: Integer,
    required: 'Casual Worker Pay is required'
  },
  average_casual_hours: {
    type: Integer,
    required: 'Average hours is required'
  },
  standard_workers: {
    type: String,
    trim: true,
    required: 'Standard Workers is required'
  },
  standard_worker_pay: {
    type: Integer,
    required: 'Standard Worker Pay is required'
  },
  average_standard_hours: {
    type: Integer,
    required: 'Average hours is required'
  },
  expert_workers: {
    type: String,
    trim: true,
    required: 'Expert Workers is required'
  },
  expert_worker_pay: {
    type: Integer,
    required: 'Expert Worker Pay is required'
  },
  average_expert_hours: {
    type: Integer,
    required: 'Average hours is required'
  },
  total_physical: {
    type: Integer,
    required: 'Physical item is not required'
  },

  updated: Date,
  created: {
    type: Date,
    default: Date.now
  }

        
})

const userModel = mongoose.model('Quotes', UserSchema);
userModel.createIndexes();
export default quoteModel

