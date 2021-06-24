import {strict as assert} from 'assert'
import {CategoryController} from '../api/controller/category.controller'
const config = require('./../config.json')

const category = new CategoryController('category')

describe('Category', function(){
    it('Popular category', async function () {
        const body = await category.getByUrl(config.category.popularCasino)
        assert(body.confirm === 'ok', 'TDO popular category')
        assert(category.checkKey(config.category.popularCasino, body), 'Check key popular category')
        assert(category.checkMeta(body), 'Check meta popular category')
    })
    it('Licensed category', async function () {
        const body = await category.getByUrl(config.category.licensedCasino)
        assert(body.confirm === 'ok', 'TDO licensed category')
        assert(category.checkKey(config.category.licensedCasino, body), 'Check key licensed category')
        assert(category.checkMeta(body), 'Check meta licensed category')
    })
    it('Min deposit category', async function () {
        const body = await category.getByUrl(config.category.minDepositCasino)
        assert(body.confirm === 'ok', 'TDO min deposit category')
        assert(category.checkKey(config.category.minDepositCasino, body), 'Check key min deposit category')
        assert(category.checkMeta(body), 'Check meta deposit category')
    })
    it('Free bonus category', async function () {
        const body = await category.getByUrl(config.category.freeBonusCasino)
        assert(body.confirm === 'ok', 'TDO free bonus category')
        assert(category.checkKey(config.category.freeBonusCasino, body), 'Check key free bonus category')
        assert(category.checkMeta(body), 'Check meta free bonus category')
    })
    it('New slots category', async function () {
        const body = await category.getByUrl(config.category.newSlots)
        assert(body.confirm === 'ok', 'TDO new slots category')
        assert(category.checkKey(config.category.newSlots, body), 'Check key new slots category')
        assert(category.checkMeta(body), 'Check meta new slots category')
    })
    it('Best for payout category', async function () {
        const body = await category.getByUrl(config.category.bestForPayout)
        assert(body.confirm === 'ok', 'TDO best for payout category')
        assert(category.checkKey(config.category.bestForPayout, body), 'Check key best for payout category')
        assert(category.checkMeta(body), 'Check meta best for payout category')
    })
    it('Bonus pay category', async function () {
        const body = await category.getByUrl(config.category.bonusPay)
        assert(body.confirm === 'ok', 'TDO bonus pay category')
        assert(category.checkKey(config.category.bonusPay, body), 'Check key bonus pay category')
        assert(category.checkMeta(body), 'Check meta bonus pay category')
    })
    it('Progressive category', async function () {
        const body = await category.getByUrl(config.category.progressive)
        assert(body.confirm === 'ok', 'TDO progressive category')
        assert(category.checkKey(config.category.progressive, body), 'Check key progressive category')
        assert(category.checkMeta(body), 'Check meta progressive category')
    })
    it('Megaways category', async function () {
        const body = await category.getByUrl(config.category.megaways)
        assert(body.confirm === 'ok', 'TDO megaways category')
        assert(category.checkKey(config.category.megaways, body), 'Check key megaways category')
        assert(category.checkMeta(body.body), 'Check meta megaways category')
    })
})