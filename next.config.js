module.exports = {
    exportPathMap: function () {
        return {
            '/': { page: '/' },      
            '/p/first-post': { page: '/post', query: { title: "first-post" } },
            '/p/post-two': { page: '/post', query: { title: "post-two" } },
            '/p/first-js': { page: '/post', query: { title: "first-js" } },
            '/p/first-react': { page: '/post', query: { title: "first-react" } }
        }
    }
}