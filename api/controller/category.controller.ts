import got from 'got'

export class CategoryController {
    async getByUrl(id: number | string) {
        const response = await got(`https://api.onlinecasino.ua/api/category/${id}`)
        return JSON.parse(response.body)
    }
}