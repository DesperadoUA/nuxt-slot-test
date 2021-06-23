import {JsonRequest} from './request'
import { BaseController } from './base.controller'
const shema = require('./../shema/news.json')

export class NewsController extends BaseController {
    async getByUrl(id: string) {
        const response = await new JsonRequest()
                                   .postType('news')
                                   .url(id)
                                   .send()
        return JSON.parse(response.body)
    } 
    async getAll(query: any){
        const response = await new JsonRequest()
                                   .postType('news')
                                   .url('')
                                   .searchParams(query)
                                   .send()
        return JSON.parse(response.body)
    }
    checkKey(data: any) {
        return this.checkKeyShema(shema, data)
    }
}