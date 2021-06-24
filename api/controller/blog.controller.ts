import { BaseController } from './base.controller'
const shema = require('./../shema/blog.json')

export class BlogController extends BaseController {
    checkKey(data: any) {
        return this.checkKeyShema(shema, data)
    }
}