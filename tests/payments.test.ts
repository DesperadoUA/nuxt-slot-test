import {strict as assert} from 'assert'
import {PaymentController} from '../api/controller/payment.controller'

const post = new PaymentController('payments')

describe('Payment', function() {
    it('All payments', async function () {
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
               assert(post.checkKey(currentPost.body), 'Check key payment') 
               assert(post.checkMeta(currentPost.body), 'Check meta payment')
            }
        }
       
    })
})