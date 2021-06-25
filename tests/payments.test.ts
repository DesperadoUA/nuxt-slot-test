import {strict as assert} from 'assert'
import {PaymentController} from '../api/controller/payment.controller'
const POST_TYPE = 'payments'
const post = new PaymentController(POST_TYPE)

describe(POST_TYPE, function() {
    it('All ' + POST_TYPE, async function () {
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
               assert(post.checkKey(currentPost.body), 'Check key ' + POST_TYPE) 
               assert(post.checkMeta(currentPost.body), 'Check meta ' + POST_TYPE)
               assert(post.checkRequiredKey(currentPost.body), 'Check required key ' + POST_TYPE)
            }
        }
       
    })
})