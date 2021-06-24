import { BaseController } from './base.controller'
const shema = require('./../shema/casino.json')

export class CasinoController extends BaseController {
    checkKey(data: any) {
        return this.checkKeyShema(shema, data)
    }
}