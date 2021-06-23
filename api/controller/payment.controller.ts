import {JsonRequest} from './request'
import { BaseController } from './base.controller'
const shema = require('./../shema/payments.json')

export class PaymentController extends BaseController {
    async getByUrl(id: string) {
        const response = await new JsonRequest()
                                   .postType('payments')
                                   .url(id)
                                   .send()
        return JSON.parse(response.body)
    } 
    async getAll(query: any){
        const response = await new JsonRequest()
                                   .postType('payments')
                                   .url('')
                                   .searchParams(query)
                                   .send()
        return JSON.parse(response.body)
    }
    checkKey(data: any) {
        return this.checkKeyShema(shema, data)
    }
}