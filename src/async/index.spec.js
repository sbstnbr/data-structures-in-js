import { readFileCallback } from "./index"
import { expect } from 'chai'

const goodPath = './test.json'
const wrongPath = './test2.json'

const content = require('test.json')

describe('callbacks', () => {
    it('should return the result in a callback', done => {
        function callback(data){
            expect(data).to.equal(content)
            done()
        }
        readFileCallback(goodPath, callback)
    })
})