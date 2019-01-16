const marker = require('@ajar/marker')
const slug = require('./index');


const some_string = "this is a blog post title"
const another_string = "and some other stuff"

const result = slug(some_string,'and yet some other thing',another_string)

marker.info('before:',some_string)
marker.info('before',another_string)
marker.debug('after',result)