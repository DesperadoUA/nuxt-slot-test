import { BaseController } from './base.controller'
const shema = require('./../shema/category.json')
const config = require('../../config.json')

export class CategoryController extends BaseController {
    checkKey(page: string, data: object) {
        switch(page){
            case config.category.popularCasino: return this.popularCasinoPageKeys(data)
            case config.category.licensedCasino: return this.licensedCasinoPageKeys(data)
            case config.category.minDepositCasino: return this.minDepositCasinoPageKeys(data)
            case config.category.freeBonusCasino: return this.freeBonusCasinoPageKeys(data)
            case config.category.newSlots: return this.newSlotsPageKeys(data)
            case config.category.bestForPayout: return this.bestPayoutPageKeys(data)
            case config.category.bonusPay: return this.bonusPayPageKeys(data)
            case config.category.progressive: return this.progressivePageKeys(data)
            case config.category.megaways: return this.megawaysPageKeys(data)
        }
    }
    popularCasinoPageKeys(data: any) {
        const body: object = data.body
        return this.checkKeyShema(shema.popularCasino, body)
    }
    licensedCasinoPageKeys(data: any) {
        const body: object = data.body
        return this.checkKeyShema(shema.licensedCasino, body)
    }
    minDepositCasinoPageKeys(data: any) {
        const body: object = data.body
        return this.checkKeyShema(shema.minDepositCasino, body)
    }
    freeBonusCasinoPageKeys(data: any) {
        const body: object = data.body
        return this.checkKeyShema(shema.freeBonusCasino, body)
    }
    newSlotsPageKeys(data: any) {
        const body: object = data.body
        return this.checkKeyShema(shema.newSlots, body)
    }
    bestPayoutPageKeys(data: any) {
        const body: object = data.body
        return this.checkKeyShema(shema.bestPayout, body)
    }
    bonusPayPageKeys(data: any) {
        const body: object = data.body
        return this.checkKeyShema(shema.bonusPay, body)
    }
    progressivePageKeys(data: any) {
        const body: object = data.body
        return this.checkKeyShema(shema.progressive, body)
    }
    megawaysPageKeys(data: any) {
        const body: object = data.body
        return this.checkKeyShema(shema.megaways, body)
    }
}