import { BaseController } from './base.controller'
const shema = require('./../shema/casino.json')

export class CasinoController extends BaseController {
    checkKey(data: any) {
        return this.checkKeyShema(shema, data)
    }
    checkRequiredKey(data:any):boolean {
        if(data.status !== 'public') {
            console.log('Key status')
            return false
        }
        if(data.slug !== 'casino') {
            console.log('Key slug')
            return false
        }
        if(data.post_type !== 'casino') {
            console.log('Key post_type')
            return false
        }  
        if(this.checkEmptyKey('thumbnail', data)) return false
        if(this.checkEmptyKey('icon', data)) return false
        if(this.checkEmptyKey('bonus', data)) return false
        if(this.checkEmptyKey('bonus_wagering', data)) return false
        if(this.checkEmptyKey('freespins', data)) return false
        if(this.checkEmptyKey('freespins_wagering', data)) return false
        if(this.checkEmptyKey('methods_pay', data)) return false 
        if(this.checkEmptyKey('methods_payout', data)) return false
        if(this.checkEmptyKey('min_deposit', data)) return false
        if(this.checkEmptyKey('min_payout', data)) return false
        if(this.checkEmptyKey('rating', data)) return false
        if(this.checkEmptyKey('ref', data)) return false
        if(this.checkEmptyKey('type_games', data)) return false
        if(this.checkEmptyKey('vendors', data)) return false
        if(this.checkEmptyKey('payments', data)) return false
        if(this.checkEmptyKey('slots', data)) return false
        return true
    }
}