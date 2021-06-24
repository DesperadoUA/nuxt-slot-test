import {strict as assert} from 'assert'
import {InterviewController} from '../api/controller/interview.controller'

const post = new InterviewController('interview')

describe('Interview', function() {
    it('All interview', async function () {
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
               assert(post.checkKey(currentPost.body), 'Check key interview') 
               assert(post.checkMeta(currentPost.body), 'Check meta interview')
            }
        }
       
    })
})