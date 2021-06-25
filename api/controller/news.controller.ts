import { BaseController } from './base.controller'
const shema = require('./../shema/news.json')

export class NewsController extends BaseController {
    checkKey(data: any) {
        return this.checkKeyShema(shema, data)
    }
    checkRequiredKey(data:any):boolean {
        if(data.status !== 'public') {
            console.log('Key status')
            return false
        }
        if(data.slug !== 'news') {
            console.log('Key slug')
            return false
        }
        if(data.post_type !== 'news') {
            console.log('Key post_type')
            return false
        }  
        if(this.checkEmptyKey('thumbnail', data)) return false
        return true
    }
}