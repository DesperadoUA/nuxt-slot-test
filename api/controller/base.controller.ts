export class BaseController {
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
}