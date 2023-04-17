import Quote from './quote.model.js'
import lodash from 'lodash'
import errorHandler from './dbErrorHandler.js'

const create = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:8000/api/users");
  const quote = new Quote(req.body)
  try {
    quote.markModified('quote');
    await quote.save()
    return res.status(200).json({
      message: "Successfully inputted quote"
    })
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}

const list = async (req, res) => {
  try {
    let quotes = await Quote.find().select('casual_workers casual_worker_pay average_casual_hours standard_workers standard_worker_pay average_standard_hours expert_workers expert_worker_pay average_expert_hours created')
    console.log("Got quotes" + quotes)
    res.json(quotes)
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}

const quoteById = async (req, res, next, id) => {
  try {
    console.log("Getting quote: " + id)
    let quote = await Quote.findById(id)
    if (!quote)
      return res.status('400').json({
        error: "Quote not found"
      })
    req.profile = quote
    next()
  } catch (err) {
    return res.status(400).json({
      error: "Could not retrieve quote"
    })
  }
}

const update = async (req, res) => {
  try {
    let quote = req.profile
    quote = lodash.extend(quote, req.body)
    quote.updated = Date.now()
    await quote.save()
    res.json(quote)
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}

const remove = async (req, res) => {
  try {
    let quote = req.profile
    let deletedQuote = await quote.remove()
    res.json(quote)
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}

const read = (req, res) => {
  return res.json(req.profile)
}

const calculate = (req, res) => {
  try {
    const quote = new Quote(req.body)
    let costCasual = quote.casual_worker_pay * quote.average_casual_hours
    let totalCostCasual = costCasual * quote.casual_workers
    let costStandard = quote.standard_worker_pay * quote.average_standard_hours
    let totalCostStandard = costStandard * quote.standard_workers
    let costExpert = quote.expert_worker_pay * quote.average_expert_hours
    let totalCostExpert = costExpert * quote.expert_workers
    let totalCost = totalCostCasual + totalCostStandard + totalCostExpert
    return res.json(totalCost)
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}


export default {
  create,
  quoteById,
  read,
  list,
  remove,
  update,
  calculate
}
