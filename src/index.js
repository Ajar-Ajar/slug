// const marker = require('@ajar/marker')


// marker.info('hello')

const slugger = (...args)=> {
    return args.join(' ').split(' ').join('-').toUpperCase()
}

module.exports = slugger;