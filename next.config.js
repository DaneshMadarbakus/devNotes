const SUMMARY_JSON = require('./content/summary.json')

const pageId = req.params.id;
const posts = Object.keys(SUMMARY_JSON.fileMap).map(function (key) {
  return SUMMARY_JSON.fileMap[key];
});
const currentPostSummary = posts.filter(function (post) {
  return post.id === pageId;
})[0];
const currentPage = require(`./${currentPostSummary.dir}/${currentPostSummary.base}`)
const queryParams = { content: currentPage }

module.exports = {
    exportPathMap: function () {








        return {
            '/': { page: '/' },      
            '/p/first-post': { page: '/post', query: { content: {
  "id": "first-post",
  "title": "First post",
  "date": "2017-06-01T00:00:00.000Z",
  "bodyContent": "First post!\n\nCheckout [github to see my other projects](github.com/tscanlin)\n\n[another page](/custom-post)",
  "bodyHtml": "<p>First post!</p>\n<p>Checkout <a href=\"github.com/tscanlin\">github to see my other projects</a></p>\n<p><a href=\"/custom-post\">another page</a></p>\n",
  "preview": "First post!\n\nCheckout github to see my other projects\n\nanother page",
  "dir": "content/posts/development",
  "base": "first-post.json",
  "ext": ".json",
  "sourceBase": "first-post.md",
  "sourceExt": ".md"
} } },
            '/p/post-two': { page: '/post', query: { content: "post-two" } },
            '/p/first-js': { page: '/post', query: { content: "first-js" } },
            '/p/first-react': { page: '/post', query: { content: "first-react" } }
        }
    }
}