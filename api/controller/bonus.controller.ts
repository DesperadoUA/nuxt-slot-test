import { BaseController } from './base.controller'
const shema = require('./../shema/bonus.json')

export class BonusController extends BaseController {    
    checkKey(data: any) {
        return this.checkKeyShema(shema, data)
    }
    checkRequiredKey(data:any):boolean {
        if(data.status !== 'public') {
            console.log('Key status')
            return false
        }
        if(data.slug !== 'bonuses') {
            console.log('Key slug')
            return false
        }
        if(data.post_type !== 'bonus') {
            console.log('Key post_type')
            return false
        }  
        if(this.checkEmptyKey('thumbnail', data)) return false
        if(this.checkEmptyKey('rating', data)) return false
        if(this.checkEmptyKey('card', data)) return false
        if(this.checkEmptyKey('thumbnail', data.card)) return false
        if(this.checkEmptyKey('bonus_self', data.card)) return false
        if(this.checkEmptyKey('ref', data.card)) return false 
        return true
    }
}