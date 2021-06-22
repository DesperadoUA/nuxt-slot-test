import type {Options, Method} from 'got'
import got from 'got'
export class JsonRequest {
    protected options: any = {
        responseType: 'json',
        method: 'GET',
        searchParams: new URLSearchParams([]),
        postType: '',
        baseUrl: 'https://api.onlinecasino.ua/api/'
    }
    public url(url: string | URL): this {
        this.options.url = this.options.baseUrl + this.options.postType + url
        return this
    }
    public postType(url: string | URL): this {
        this.options.postType = url + '/'
        return this
    }
    public method(method: Method){
        this.options.method = method
        return this
    }
    public searchParams(searchParams: any): this {
        this.options.searchParams = new URLSearchParams(searchParams)
        return this
    }
    public body(body: any): this {
        this.options.json = body
        return this
    }
    public send() {
        const query = this.options.searchParams.toString() === '' 
                      ? '' 
                      : '?'+this.options.searchParams.toString()
        return got(this.options.url + query)
    }
}