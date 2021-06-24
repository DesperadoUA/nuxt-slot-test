import {strict as assert} from 'assert'
import {VendorController} from '../api/controller/vendor.controller'

const post = new VendorController('vendors')

describe('Vendor', function() {
    it('All vendor', async function () {
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
               assert(post.checkKey(currentPost.body), 'Check key vendor') 
               assert(post.checkMeta(currentPost.body), 'Check meta vendor')
            }
        }
       
    })
})