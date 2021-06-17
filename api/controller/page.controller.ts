import got from 'got'

export class PageController {
    async getByUrl(id: number | string) {
        const response = await got(`https://api.onlinecasino.ua/api/pages/${id}`)
        return JSON.parse(response.body)
    }
}