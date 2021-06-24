import { BaseController } from './base.controller'
const shema = require('./../shema/slots.json')

export class SlotController extends BaseController {
    checkKey(data: any) {
        return this.checkKeyShema(shema, data)
    }
}