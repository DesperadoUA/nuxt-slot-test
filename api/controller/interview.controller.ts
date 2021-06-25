import { BaseController } from './base.controller'
const shema = require('./../shema/interview.json')

export class InterviewController extends BaseController {
    checkKey(data: any) {
        return this.checkKeyShema(shema, data)
    }
    checkRequiredKey(data:any):boolean {
        if(data.status !== 'public') {
            console.log('Key status')
            return false
        }
        if(data.slug !== 'interview') {
            console.log('Key slug')
            return false
        }
        if(data.post_type !== 'interview') {
            console.log('Key post_type')
            return false
        }  
        if(this.checkEmptyKey('thumbnail', data)) return false
        return true
    }
}