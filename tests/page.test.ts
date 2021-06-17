import got from 'got'
import {strict as assert} from 'assert'
import {PageController} from '../api/controller/page.controller'

const page = new PageController()

describe('Pages', function(){
    it('Main page', async function () {
        const body = await page.getByUrl('main')
        assert(body.confirm === 'ok', 'TDO main page')
    })
    it('Reviews page', async function () {
        const body = await page.getByUrl('reviews')
        assert(body.confirm === 'ok', 'TDO reviews page')
    })
    it('Bonus page', async function () {
        const body = await page.getByUrl('bonuses')
        assert(body.confirm === 'ok', 'TDO bonuses page')
    })
    it('Blog page', async function () {
        const body = await page.getByUrl('blog')
        assert(body.confirm === 'ok', 'TDO blog page')
    })
    it('News page', async function () {
        const body = await page.getByUrl('news')
        assert(body.confirm === 'ok', 'TDO news page')
    })
    it('Interview page', async function () {
        const body = await page.getByUrl('interview')
        assert(body.confirm === 'ok', 'TDO interview page')
    })
    it('Useful page', async function () {
        const body = await page.getByUrl('useful')
        assert(body.confirm === 'ok', 'TDO useful page')
    })
})