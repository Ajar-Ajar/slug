const slug = require('./index');

/**
 * @describe [optional] - group of tests with a header to describe them
 */
describe('testing slugger basic functionality', () => {
    /**
     * @it - unit tests can use the 'it' syntax
     */
    it('slugger can slug string with spaces', () => {
        const input = "this is a blog post title"
        const expected = "this-is-a-blog-post-title"
        // const another_string = "and some other stuff"
        const result = slug(input);      
        expect(expected).toEqual(result);
    })
    /**
     * @test - unit test can use the 'test' syntax
     */
    test('slugger can slug any number of spacy strings', () => {
        const input = "this is a blog post title"
        const input2 = "and some other stuff"
        const expected = "this-is-a-blog-post-title-and-some-other-stuff"
        const result = slug(input,input2);      
        expect(expected).toEqual(result);
    })
})