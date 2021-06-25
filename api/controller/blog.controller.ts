import { BaseController } from './base.controller'
const shema = require('./../shema/blog.json')

export class BlogController extends BaseController {
    checkKey(data: any) {
        return this.checkKeyShema(shema, data)
    }
    checkRequiredKey(data:any):boolean {
        if(data.status !== 'public') return false
        if(data.slug !== 'blog') return false
        if(data.post_type !== 'blog') return false
        if(this.checkEmptyKey('thumbnail', data)) return false    
        return true
    }
}