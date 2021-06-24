import { BaseController } from './base.controller'
const shema = require('./../shema/news.json')

export class NewsController extends BaseController {
    checkKey(data: any) {
        return this.checkKeyShema(shema, data)
    }
}