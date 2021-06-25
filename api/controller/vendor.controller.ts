import { BaseController } from './base.controller'
const shema = require('./../shema/vendor.json')

export class VendorController extends BaseController {
    checkKey(data: any) {
        return this.checkKeyShema(shema, data)
    }
}