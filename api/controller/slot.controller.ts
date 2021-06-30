import { BaseController } from './base.controller'
const shema = require('./../shema/slots.json')

export class SlotController extends BaseController {
    checkKey(data: any) {
        return this.checkKeyShema(shema, data)
    }
    checkRequiredKey(data:any):boolean {
        if(data.status !== 'public') return false
        if(data.slug !== 'slots') return false
        if(data.post_type !== 'slot') return false
        if(this.checkEmptyKey('thumbnail', data)) return false 
        if(this.checkEmptyKey('icon', data)) return false    
        if(this.checkEmptyKey('min_bet', data)) return false 
        if(this.checkEmptyKey('max_bet', data)) return false
        if(this.checkEmptyKey('pay_lines', data)) return false 
        if(this.checkEmptyKey('reels', data)) return false 
        if(this.checkEmptyKey('volatility', data)) return false
        if(this.checkEmptyKey('bonus_rounds', data)) return false
        if(this.checkEmptyKey('rtp', data)) return false
        if(this.checkEmptyKey('ref', data)) return false
        if(this.checkEmptyKey('number_rows', data)) return false
        if(data.type_game.length !== 1) return false
        if(this.checkEmptyKey('vendors', data)) return false
        if(this.checkEmptyKey('casino', data)) return false
        return true
    }
}