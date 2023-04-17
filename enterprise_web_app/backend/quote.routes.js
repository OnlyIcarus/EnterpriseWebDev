import express from 'express'
import quoteCtrl from './quote.controller.js'
import authCtrl from './user.controller.js'

const router = express.Router()

router.route('/api/quote')
  .get(quoteCtrl.list)
  .post(quoteCtrl.create)

router.route('/api/quote/:quoteId')
  .get(quoteCtrl.read)
  .put(quoteCtrl.update)
  .delete(quoteCtrl.remove)

router.param('quoteId', quoteCtrl.quoteById)
  
export default router
