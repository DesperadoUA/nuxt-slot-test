import {strict as assert} from 'assert'
import {SlotController} from '../api/controller/slot.controller'

const post = new SlotController()

describe('Slot', function() {
    it('All slots', async function () {
        const limit = 10
        let offset = 0
        const posts = await post.getAll({limit, offset})
        const total = Math.ceil(posts.body.total/limit)

        for(let i:number = 0; i < total; i++) {
            offset = limit * i
            console.log('offset', offset)
            const posts = await post.getAll({limit, offset})

            for(let item of posts.body.posts) {
               const currentPost = await post.getByUrl(item.permalink) 
               console.log(item.permalink)
               assert(post.checkKey(currentPost.body), 'Check key slot') 
               assert(post.checkMeta(currentPost.body), 'Check meta slot')
            }
        }
       
    })
})