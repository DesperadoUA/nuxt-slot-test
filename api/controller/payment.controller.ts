import { BaseController } from './base.controller'
const shema = require('./../shema/payments.json')

export class PaymentController extends BaseController {
    checkKey(data: any) {
        return this.checkKeyShema(shema, data)
    }
    checkRequiredKey(data:any):boolean {
        if(data.status !== 'public') {
            console.log('Key status')
            return false
        }
        if(data.slug !== 'payments') {
            console.log('Key slug')
            return false
        }
        if(data.post_type !== 'payment') {
            console.log('Key post_type')
            return false
        }  
        if(this.checkEmptyKey('thumbnail', data)) return false
        if(this.checkEmptyKey('short_text', data)) return false
        if(this.checkEmptyKey('rating', data)) return false
        if(this.checkEmptyKey('casino', data)) return false
        if(this.checkEmptyKey('thumbnail', data.casino[0])) return false
        if(this.checkEmptyKey('rating', data.casino[0])) return false
        if(this.checkEmptyKey('permalink', data.casino[0])) return false
        if(this.checkEmptyKey('ref', data.casino[0])) return false
        if(this.checkEmptyKey('bonus', data.casino[0])) return false
        if(this.checkEmptyKey('bonus_wagering', data.casino[0])) return false
        if(this.checkEmptyKey('freespins', data.casino[0])) return false
        if(this.checkEmptyKey('freespins_wagering', data.casino[0])) return false
        return true
    }
}