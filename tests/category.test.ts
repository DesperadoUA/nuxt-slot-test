import got from 'got'
import {strict as assert} from 'assert'
import {CategoryController} from '../api/controller/category.controller'

const category = new CategoryController()

describe('Category', function(){
    it('Popular category', async function () {
        const body = await category.getByUrl('popular-casino')
        assert(body.confirm === 'ok', 'TDO popular category')
    })
    it('Licensed category', async function () {
        const body = await category.getByUrl('licensed-casino')
        assert(body.confirm === 'ok', 'TDO licensed category')
    })
    it('Min deposit category', async function () {
        const body = await category.getByUrl('min-deposit-casino')
        assert(body.confirm === 'ok', 'TDO min deposit category')
    })
    it('Free bonus category', async function () {
        const body = await category.getByUrl('free-bonus-casino')
        assert(body.confirm === 'ok', 'TDO free bonus category')
    })
    it('New slots category', async function () {
        const body = await category.getByUrl('new-slots')
        assert(body.confirm === 'ok', 'TDO new slots category')
    })
    it('Best for payout category', async function () {
        const body = await category.getByUrl('best-for-payout')
        assert(body.confirm === 'ok', 'TDO best for payout category')
    })
    it('Bonus pay category', async function () {
        const body = await category.getByUrl('bonus-pay')
        assert(body.confirm === 'ok', 'TDO bonus pay category')
    })
    it('Progressive category', async function () {
        const body = await category.getByUrl('progressive')
        assert(body.confirm === 'ok', 'TDO bonus pay category')
    })
    it('Megaways category', async function () {
        const body = await category.getByUrl('megaways')
        assert(body.confirm === 'ok', 'TDO megaways category')
    })
})