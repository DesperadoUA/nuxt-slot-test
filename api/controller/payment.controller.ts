import {JsonRequest} from './request'
import { BaseController } from './base.controller'
const shema = require('./../shema/payments.json')

export class PaymentController extends BaseController {
    checkKey(data: any) {
        return this.checkKeyShema(shema, data)
    }
}