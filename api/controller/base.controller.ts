import {JsonRequest} from '../DAL/request'
export class BaseController {
    postType: string
    constructor(postType: string) {
        this.postType = postType
    }
    async getByUrl(id: string) {
        const response = await new JsonRequest()
                                   .postType(this.postType)
                                   .url(id)
                                   .send()
        return JSON.parse(response.body)
    } 
    async getAll(query: any){
        const response = await new JsonRequest()
                                   .postType(this.postType)
                                   .url('')
                                   .searchParams(query)
                                   .send()
        return JSON.parse(response.body)
    }
    public checkKeyShema(shema:any, body:any) {
        for (let key in shema) {
            if(!(key in body)) {
                console.log(key)
                return false
            }
            if(shema[key] !== typeof body[key]) {
                console.log(key, body[key], typeof body[key])
                return false
            } 
        }
        return true
    }
    public checkMeta(data:any) {
        if(data.title === "") return false
        if(data.h1 === "") return false
        if(data.meta_title === "") return false
        if(data.description === "") return false
        return true
    }
    public checkEmptyKey(key:string, data:any) {
        let result = false
        if(key in data) {
            const type = typeof data[key]
            switch(type) {
                case 'number': {
                    if(data[key] === 0) result = true
                    break
                }
                case 'string': {
                    if(data[key] === '') result = true
                    break
                }
                case 'object': {
                    if(Array.isArray(data[key])) {
                        if(data[key].length === 0) result = true 
                    } 
                    break
                }
            }
        } else {
            result = true
        }
        if(result) {
            console.log(`Error key ${key}`)
            return result
        }
        return result
    }
}