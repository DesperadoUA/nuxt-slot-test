import {JsonRequest} from './request'
import { BaseController } from './base.controller'
const shema = require('./../shema/bonus.json')

export class BonusController extends BaseController {
    async getByUrl(id: string) {
        const response = await new JsonRequest()
                                   .postType('bonuses')
                                   .url(id)
                                   .send()
        return JSON.parse(response.body)
    } 
    async getAll(query: any){
        const response = await new JsonRequest()
                                   .postType('bonuses')
                                   .url('')
                                   .searchParams(query)
                                   .send()
        return JSON.parse(response.body)
    }
    checkKey(data: any) {
        return this.checkKeyShema(shema, data)
    }
}