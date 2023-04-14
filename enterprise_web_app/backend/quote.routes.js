import express from 'express'
import quoteCtrl from './quote.controller.js'
import authCtrl from './quote.controller.js'

const router = express.Router()

router.route('/api/quote')
  .get(quoteCtrl.list)
  .post(quoteCtrl.create)

router.route('/api/quote/:quoteId')
  .put(quoteCtrl.update)
  .delete(quoteCtrl.remove)

router.param('wuoteId', quoteCtrl.quoteById)
  
export default router
