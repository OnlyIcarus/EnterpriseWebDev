import mongoose from 'mongoose'
import crypto from 'crypto'

const QuoteSchema = new mongoose.Schema({
  casual_workers: String,
  casual_worker_pay: Number,
  average_casual_hours: Number,
  standard_workers: Number,
  standard_worker_pay: Number,
  average_standard_hours: Number,
  expert_workers: Number,
  expert_worker_pay: Number,
  average_expert_hours: Number,
  total_physical: Number,

  updated: Date,
  created: {
    type: Date,
    default: Date.now
  }

        
})

const quoteModel = mongoose.model('Quotes', QuoteSchema);
quoteModel.createIndexes();
export default quoteModel

