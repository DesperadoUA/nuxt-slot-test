import { BaseController } from './base.controller'
const shema = require('./../shema/interview.json')

export class InterviewController extends BaseController {
    checkKey(data: any) {
        return this.checkKeyShema(shema, data)
    }
}