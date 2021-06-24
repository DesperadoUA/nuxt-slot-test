import {strict as assert} from 'assert'
import {PageController} from '../api/controller/page.controller'
const config = require('./../config.json')

const page = new PageController('pages')

describe('Pages', function(){
    it('Main page', async function () {
        const body = await page.getByUrl(config.pages.main)
        assert(body.confirm === 'ok', 'TDO main page')
        assert(page.checkKey(config.pages.main, body), 'Check key main page')
        assert(page.checkMeta(body.body), 'Check meta main page')
    })
    it('Reviews page', async function () {
        const body = await page.getByUrl(config.pages.reviews)
        assert(body.confirm === 'ok', 'TDO reviews page')
        assert(page.checkKey(config.pages.reviews, body), 'Check key reviews page')
        assert(page.checkMeta(body.body), 'Check meta reviews page')
    })
    it('Bonus page', async function () {
        const body = await page.getByUrl(config.pages.bonuses)
        assert(body.confirm === 'ok', 'TDO bonuses page')
        assert(page.checkKey(config.pages.bonuses, body), 'Check key bonuses page')
        assert(page.checkMeta(body.body), 'Check meta bonuses page')
    })
    it('Blog page', async function () {
        const body = await page.getByUrl(config.pages.blog)
        assert(body.confirm === 'ok', 'TDO blog page')
        assert(page.checkKey(config.pages.blog, body), 'Check key blog page')
        assert(page.checkMeta(body.body), 'Check meta blog page')
    })
    it('News page', async function () {
        const body = await page.getByUrl(config.pages.news)
        assert(body.confirm === 'ok', 'TDO news page')
        assert(page.checkKey(config.pages.news, body), 'Check key news page')
        assert(page.checkMeta(body.body), 'Check meta news page')
    })
    it('Interview page', async function () {
        const body = await page.getByUrl(config.pages.interview)
        assert(body.confirm === 'ok', 'TDO interview page')
        assert(page.checkKey(config.pages.interview, body), 'Check key interview page')
        assert(page.checkMeta(body.body), 'Check meta interview page')
    })
    it('Useful page', async function () {
        const body = await page.getByUrl(config.pages.useful)
        assert(body.confirm === 'ok', 'TDO useful page')
        assert(page.checkKey(config.pages.useful, body), 'Check key useful page')
        assert(page.checkMeta(body.body), 'Check meta useful page')
    })
})