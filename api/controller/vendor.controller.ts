import { BaseController } from './base.controller'
const shema = require('./../shema/vendor.json')

export class VendorController extends BaseController {
    checkKey(data: any) {
        return this.checkKeyShema(shema, data)
    }
    checkRequiredKey(data:any):boolean {
        if(data.status !== 'public') {
            console.log('Key status')
            return false
        }
        if(data.slug !== 'vendors') {
            console.log('Key slug')
            return false
        }
        if(data.post_type !== 'vendor') {
            console.log('Key post_type')
            return false
        }  
        if(this.checkEmptyKey('thumbnail', data)) return false
        if(this.checkEmptyKey('icon', data)) return false
        if(this.checkEmptyKey('casino', data)) return false
        if(this.checkEmptyKey('slots', data)) return false
        return true
    }
}