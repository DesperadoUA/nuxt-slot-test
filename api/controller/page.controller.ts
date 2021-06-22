import {JsonRequest} from './request'
import { BaseController } from './base.controller'
const shema = require('./../shema/pages.json')
const config = require('../../config.json')

export class PageController extends BaseController {
    async getByUrl(id: string) {
        const response = await new JsonRequest()
                                   .postType('pages')
                                   .url(id)
                                   .send()
        return JSON.parse(response.body)
    }
    checkKey(page: string, data: object) {
        switch(page){
            case config.pages.main: return this.mainPageKeys(data)
            case config.pages.reviews: return this.reviewsPageKeys(data)
            case config.pages.bonuses: return this.bonusesPageKeys(data)
            case config.pages.blog: return this.blogPageKeys(data)
            case config.pages.news: return this.newsPageKeys(data)
            case config.pages.interview: return this.interviewPageKeys(data)
            case config.pages.useful: return this.usefulPageKeys(data)
        }
    }
    mainPageKeys(data: any) {
        const body: object = data.body
        return this.checkKeyShema(shema.main, body)
    }
    reviewsPageKeys(data: any) {
        const body: object = data.body
        return this.checkKeyShema(shema.reviews, body)
    }
    bonusesPageKeys(data: any) {
        const body: object = data.body
        return this.checkKeyShema(shema.bonuses, body)
    }
    blogPageKeys(data: any) {
        const body: object = data.body
        return this.checkKeyShema(shema.blog, body)
    }
    newsPageKeys(data: any) {
        const body: object = data.body
        return this.checkKeyShema(shema.news, body)
    }
    interviewPageKeys(data: any) {
        const body: object = data.body
        return this.checkKeyShema(shema.interview, body)
    }
    usefulPageKeys(data: any) {
        const body: object = data.body
        return this.checkKeyShema(shema.useful, body)
    }
}