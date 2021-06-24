import { BaseController } from './base.controller'
const shema = require('./../shema/bonus.json')

export class BonusController extends BaseController {    
    checkKey(data: any) {
        return this.checkKeyShema(shema, data)
    }
}